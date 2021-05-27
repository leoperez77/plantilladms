using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Threading.Tasks;

namespace WebCRM.Pages.Auth
{
    [ValidateAntiForgeryToken]
    public class LoginModel : PageModel
    {



        [BindProperty]
        public string ReturnUrl { get; set; }

        [Required]
        [BindProperty]
        public string UserName { get; set; }

        [Required]
        [BindProperty]
        public string Password { get; set; }


        [BindProperty]
        [Required]
        [StringLength(4)]
        public string CaptchaCode { get; set; }


        [BindProperty]
        public int SomeProperty { get; set; }

        [Required]
        [Display(Name = "Empresa")]
        [BindProperty]
        public string Identificador { get; set; }



        public void OnGet(string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");
            ReturnUrl = returnUrl;

            //var db = new DBSecurity(_site.ConnectionString);
            //ViewData["Empresas"] = new SelectList(db.GetEmpresas(), "IdEmpresa", "Titulo");
        }


        public async Task<IActionResult> OnPostAsync()
        {
            var properties = new AuthenticationProperties
            {
                AllowRefresh = true,
                IsPersistent = true,
                ExpiresUtc = DateTimeOffset.UtcNow.AddDays(1)
            };



            var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, "demo", ClaimValueTypes.String),
                    new Claim("UserId", "1", ClaimValueTypes.String),
                    new Claim("Foto", "", ClaimValueTypes.String),
                    new Claim("IdEmpresa", "1", ClaimValueTypes.String),
                    new Claim("IdSede", "1", ClaimValueTypes.String),
                    new Claim("UrlApi", "1" , ClaimValueTypes.String),
                    new Claim("Matriz", "false" , ClaimValueTypes.Boolean),
                    new Claim(ClaimTypes.Role,"V")
                };

            var userIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var userPrincipal = new ClaimsPrincipal(userIdentity);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                userPrincipal,
                properties);

            return GoToReturnUrl(ReturnUrl);



        }

        private IActionResult GoToReturnUrl(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            return RedirectToAction("Index", "Home");
        }


    }
}