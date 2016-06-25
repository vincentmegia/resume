System.register(['@angular/platform-browser-dynamic', './header/header.component', './title/title.component', './about/about.component', './education/education.component', './work/work.component', './skill/skill.component', './footer/footer.component', './signature/signature.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, header_component_1, title_component_1, about_component_1, education_component_1, work_component_1, skill_component_1, footer_component_1, signature_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (title_component_1_1) {
                title_component_1 = title_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (work_component_1_1) {
                work_component_1 = work_component_1_1;
            },
            function (skill_component_1_1) {
                skill_component_1 = skill_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (signature_component_1_1) {
                signature_component_1 = signature_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(header_component_1.HeaderComponent);
            platform_browser_dynamic_1.bootstrap(title_component_1.TitleComponent);
            platform_browser_dynamic_1.bootstrap(about_component_1.AboutComponent);
            platform_browser_dynamic_1.bootstrap(education_component_1.EducationComponent);
            platform_browser_dynamic_1.bootstrap(work_component_1.WorkComponent);
            platform_browser_dynamic_1.bootstrap(skill_component_1.SkillComponent);
            platform_browser_dynamic_1.bootstrap(footer_component_1.FooterComponent);
            platform_browser_dynamic_1.bootstrap(signature_component_1.SignatureComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map