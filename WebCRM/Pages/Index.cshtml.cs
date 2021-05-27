using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Threading.Tasks;

namespace WebCRM.Pages
{
    [Authorize]
    public class IndexModel : PageModel
    {

        public async Task<IActionResult> OnGetAsync()
        {


            return (Page());
        }

        public IActionResult OnPost()
        {
            return RedirectToPage("./Index");
        }


    }
}
