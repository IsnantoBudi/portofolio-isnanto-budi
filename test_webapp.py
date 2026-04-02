from playwright.sync_api import sync_playwright

def main():
    print("Verifikasi tampilan web setelah perbaikan desain...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        
        page.goto('http://localhost:5173')
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(1200)
        
        title = page.title()
        print(f"Judul: {title}")
        
        page.screenshot(path='verify_home_light.png', full_page=True)
        print("Screenshot halaman utama (light mode) disimpan.")
        
        # Test dark mode
        page.evaluate("document.documentElement.classList.add('dark')")
        page.wait_for_timeout(600)
        page.screenshot(path='verify_home_dark.png', full_page=True)
        print("Screenshot dark mode disimpan.")
        
        browser.close()
    print("Verifikasi selesai.")

if __name__ == '__main__':
    main()
