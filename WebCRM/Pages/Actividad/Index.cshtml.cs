using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CRM.Models;
using WebCRM.Data;

namespace WebCRM.Pages.Actividad
{
    public class IndexModel : PageModel
    {
        private readonly WebCRM.Data.dmscrmContext _context;

        public IndexModel(WebCRM.Data.dmscrmContext context)
        {
            _context = context;
        }

        public IList<CRM.Models.Actividad> Actividad { get;set; }

        public async Task OnGetAsync()
        {
            Actividad = await _context.Actividad.ToListAsync();
        }
    }
}
