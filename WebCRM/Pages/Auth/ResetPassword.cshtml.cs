using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace WebCRM.Pages.Auth
{
    public class ResetPasswordModel : PageModel
    {

        [Required]
        [BindProperty]
        public string UserName { get; set; }

        [Required]
        [BindProperty]
        public string Password { get; set; }

        [BindProperty]
        public int IdUsuario { get; set; }

        [BindProperty]
        [Required(ErrorMessage = "Confirmación requerida")]
        [Compare("Password", ErrorMessage = "La confirmación y el password no coinciden.")]
        [DisplayName("Confirmación")]
        public string Confirmation { get; set; }


        [BindProperty(SupportsGet = true)]
        public string Token { get; set; }
        public IActionResult OnGet(string Token)
        {


            return Page();
        }

        public IActionResult OnPost()
        {


            return RedirectToPage("/Index");
        }
    }
}