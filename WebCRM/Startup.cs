using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System;

namespace WebCRM
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            FileProvider = hostingEnvironment.ContentRootFileProvider;
        }

        public IConfiguration Configuration { get; }
        public IFileProvider FileProvider { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
               .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
               {
                   options.LoginPath = new PathString("/auth/login");
                   options.AccessDeniedPath = new PathString("/auth/denied");
                   options.ExpireTimeSpan = new TimeSpan(1, 0, 0, 0);
                   options.LogoutPath = new PathString("/auth/logout");

               });

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => false;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            var ConnectionString = this.Configuration.GetConnectionString("DefaultConnection");

            services.AddHttpContextAccessor();

            
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(60);
            });

            services.AddMemoryCache();

            services
              .AddMvc()
              .AddNewtonsoftJson()
              .SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Version_3_0);

            services.AddRazorPages()
                .AddRazorRuntimeCompilation();

            //services.AddControllersWithViews();

            services.AddControllers()
              .AddNewtonsoftJson();

         


            //services.AddSession(); 
            services.AddSwaggerDocument();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
         

            if (env.IsDevelopment())
            {
                app.UseOpenApi();
                app.UseSwaggerUi3();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");


            }

            app.UseStaticFiles();

            app.UseRouting();
            app.UseCookiePolicy();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseSession();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapRazorPages();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Designer}/{id?}");
            });

        }

        void ProcessException(Exception ex, string message)
        {
            // Log exceptions here. For instance:
            System.Diagnostics.Debug.WriteLine("[{0}]: Exception occured. Message: '{1}'. Exception Details:\r\n{2}",
                DateTime.Now, message, ex);
        }
    }
}
