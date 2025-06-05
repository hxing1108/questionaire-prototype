#!/usr/bin/env python3
"""
Simple HTTP server for FHIR Questionnaire Demo
Serves files locally to avoid CORS issues
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def serve(port=8000):
    """Start the local development server"""
    
    # Ensure we're in the right directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    try:
        with socketserver.TCPServer(("", port), CustomHTTPRequestHandler) as httpd:
            print(f"🚀 FHIR Questionnaire Demo Server")
            print(f"📡 Serving at: http://localhost:{port}")
            print(f"📁 Directory: {os.getcwd()}")
            print(f"🌐 Open: http://localhost:{port}/typeform-demo.html")
            print(f"⏹️  Press Ctrl+C to stop")
            print("")
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n👋 Server stopped")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {port} is already in use. Try a different port:")
            print(f"   python3 server.py {port + 1}")
        else:
            print(f"❌ Error starting server: {e}")

if __name__ == "__main__":
    port = 8000
    
    # Allow custom port from command line
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Invalid port number. Using default 8000.")
    
    serve(port) 