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
    public class DetailsModel : PageModel
    {
        private readonly WebCRM.Data.dmscrmContext _context;

        public DetailsModel(WebCRM.Data.dmscrmContext context)
        {
            _context = context;
        }

        public Actividad Actividad { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Actividad = await _context.Actividad.FirstOrDefaultAsync(m => m.IdActividad == id);

            if (Actividad == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
