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
    public class DeleteModel : PageModel
    {
        private readonly WebCRM.Data.dmscrmContext _context;

        public DeleteModel(WebCRM.Data.dmscrmContext context)
        {
            _context = context;
        }

        [BindProperty]
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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Actividad = await _context.Actividad.FindAsync(id);

            if (Actividad != null)
            {
                _context.Actividad.Remove(Actividad);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
