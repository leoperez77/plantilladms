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
    public class RecoverPasswordModel : PageModel
    {
        [Required]
        [Display(Name = "Empresa")]
        [BindProperty]
        public string Identificador { get; set; }

      

        [Required]
        [BindProperty]
        public string UserName { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Correo inválido")]
        [BindProperty]
        public string Email { get; set; }



        public async Task<IActionResult> OnPost()
        {
           

            return Page();
        }
    }
}