using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Threading.Tasks;

namespace WebCRM.Pages.Auth
{
    public class logoutModel : PageModel
    {

        public async Task<IActionResult> OnGetAsync()
        {


            await HttpContext.SignOutAsync();
            return LocalRedirect("~/");
        }
    }
}