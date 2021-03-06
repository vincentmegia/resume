﻿using System.Linq;
using System.Net;
using IamStupendous.Resume.Repositories;
using IamStupendous.Resume.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace IamStupendous.Resume
{
    public class Startup
    {
        public Startup(IWebHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add application services.
            services.AddAuthorization();
            services.AddSingleton<IEducationService, EducationService>();
            services.AddSingleton<ISkillService, SkillService>();
            services.AddSingleton<ISummaryService, SummaryService>();
            services.AddSingleton<ITitleService, TitleService>();
            services.AddSingleton<IWorkService, WorkService>();
            services.AddSingleton<IWorkRepository, WorkRepository>();
            services.AddSingleton<IEducationRepository, EducationRepository>();
            services.AddSingleton<ISkillRepository, SkillRepository>();
            services.AddSingleton<ISummaryRepository, SummaryRepository>();
            services.AddSingleton<ITitleRepository, TitleRepository>();
            var urls = Configuration
                .GetSection("Cors")
                .GetChildren()
                .Select(x => x.Value);
            services.AddCors(options => options.AddPolicy("ApiCorsPolicy",
                builder =>
                {
                    builder
                        .WithOrigins(urls.ToArray())
                        .SetIsOriginAllowed((host) => true)
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                }));
            var trustedProxies = Configuration
                .GetSection("TrustedProxyServers")
                .GetChildren()
                .Select(x => x.Value);
            if (trustedProxies.Any())
                services.Configure<ForwardedHeadersOptions>(options =>
                {
                    foreach (var trustedProxy in trustedProxies)
                    {
                        options.KnownProxies.Add(IPAddress.Parse(trustedProxy));    
                    }
                });
            
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseExceptionHandler("/Home/Error")
                .UseForwardedHeaders(new ForwardedHeadersOptions
                    { ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto})
                .UseCors("ApiCorsPolicy")
                //.UseHttpsRedirection()
                .UseAuthorization()
                .UseRouting()
                .UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}
