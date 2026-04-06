import os
import re
from urllib.parse import urlparse

# Directorio raíz del sitio
root_dir = '.'

# Lista de páginas HTML
html_files = [
    'index.html',
    'about/index.html',
    'blog/index.html',
    'blog-desarrollo-web-mexico/index.html',
    'contacto/index.html',
    'legal/privacidad/index.html',
    'legal/terminos/index.html',
    'legal/cookies/index.html',
    'portafolio/index.html',
    'precios/index.html',
    'proceso/index.html',
    'servicios/index.html'
]

def extract_links(file_path):
    """Extrae todos los href de un archivo HTML."""
    links = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        # Buscar href="..."
        href_pattern = r'href=["\']([^"\']+)["\']'
        matches = re.findall(href_pattern, content)
        links = [match for match in matches if not match.startswith(('http', 'https', '#', 'mailto:', 'tel:'))]
    except Exception as e:
        print(f"Error leyendo {file_path}: {e}")
    return links

def resolve_path(base_path, link):
    """Resuelve la ruta absoluta desde la base."""
    if link.startswith('/'):
        return os.path.join(root_dir, link[1:])
    else:
        base_dir = os.path.dirname(base_path)
        return os.path.join(base_dir, link)

def check_link(base_path, link):
    """Verifica si un enlace existe."""
    resolved = resolve_path(base_path, link)
    # Si termina con /, buscar index.html
    if link.endswith('/') or not '.' in os.path.basename(resolved):
        resolved = os.path.join(resolved, 'index.html')
    return os.path.exists(resolved), resolved

# Verificar enlaces
broken_links = []
for html_file in html_files:
    full_path = os.path.join(root_dir, html_file)
    if not os.path.exists(full_path):
        print(f"Página no encontrada: {html_file}")
        continue
    links = extract_links(full_path)
    for link in links:
        exists, resolved_path = check_link(full_path, link)
        if not exists:
            broken_links.append((html_file, link, resolved_path))

# Resultados
if broken_links:
    print("Enlaces rotos encontrados:")
    for page, link, resolved in broken_links:
        print(f"  {page}: {link} -> {resolved}")
else:
    print("Todos los enlaces internos están funcionando correctamente.")