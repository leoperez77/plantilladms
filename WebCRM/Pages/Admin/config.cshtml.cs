using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebCRM
{
    [Authorize]
    public class configModel : PageModel
    {


        public async System.Threading.Tasks.Task OnGetAsync()
        {

        }
    }
}