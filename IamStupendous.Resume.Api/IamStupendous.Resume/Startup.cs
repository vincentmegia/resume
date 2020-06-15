using IamStupendous.Resume.Repositories;
using IamStupendous.Resume.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
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
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                //builder.AddUserSecrets();

                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                //builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            // services.AddApplicationInsightsTelemetry(Configuration);
            // services
            //     .AddMvc(options =>
            //     {
            //         var formatter = new JsonOutputFormatter
            //         {
            //             SerializerSettings = {ContractResolver = new CamelCasePropertyNamesContractResolver()}
            //         };
            //         options.OutputFormatters.Insert(0, formatter);
            //     });

            // Add application services.
            services.AddAuthorization();
            services.AddControllers();
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
            services.AddCors(options => options.AddDefaultPolicy(
                builder =>
                {
                    builder.WithOrigins("http://localhost:4200");
                }));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            // loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            // loggerFactory.AddDebug();
            //
            // app.UseApplicationInsightsRequestTelemetry();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //app.UseApplicationInsightsExceptionTelemetry();

            app.UseStaticFiles();

            //app.UseIdentity();

            // Add external authentication middleware below. To configure them please see http://go.microsoft.com/fwlink/?LinkID=532715

            // app.UseMvc(routes =>
            // {
            //     routes.MapRoute(
            //         name: "default",
            //         template: "{controller=Home}/{action=Index}/{id?}");
            // });
            app.UseCors();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}
