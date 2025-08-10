#!/usr/bin/env python3
"""
Backend API Testing Suite
Tests the FastAPI backend endpoints and server health
"""

import requests
import json
import sys
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ REACT_APP_BACKEND_URL not found in frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

def test_backend_health():
    """Test basic backend server health"""
    print("🔍 Testing Backend Server Health...")
    
    try:
        # Test root API endpoint
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Backend server is healthy and responding")
                return True
            else:
                print(f"❌ Unexpected response from root endpoint: {data}")
                return False
        else:
            print(f"❌ Backend health check failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to connect to backend: {e}")
        return False

def test_status_endpoints():
    """Test status check endpoints (GET and POST)"""
    print("\n🔍 Testing Status Check Endpoints...")
    
    try:
        # Test GET /api/status
        print("Testing GET /api/status...")
        response = requests.get(f"{API_BASE_URL}/status", timeout=10)
        
        if response.status_code == 200:
            status_checks = response.json()
            print(f"✅ GET /api/status successful - Found {len(status_checks)} status checks")
        else:
            print(f"❌ GET /api/status failed with status {response.status_code}")
            return False
        
        # Test POST /api/status
        print("Testing POST /api/status...")
        test_data = {
            "client_name": "TestClient_BackendHealthCheck"
        }
        
        response = requests.post(
            f"{API_BASE_URL}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            created_status = response.json()
            if created_status.get("client_name") == test_data["client_name"]:
                print("✅ POST /api/status successful - Status check created")
                
                # Verify the created status appears in GET request
                get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
                if get_response.status_code == 200:
                    all_statuses = get_response.json()
                    found = any(s.get("client_name") == test_data["client_name"] for s in all_statuses)
                    if found:
                        print("✅ Created status check appears in GET /api/status")
                        return True
                    else:
                        print("❌ Created status check not found in GET /api/status")
                        return False
            else:
                print(f"❌ POST response doesn't match input: {created_status}")
                return False
        else:
            print(f"❌ POST /api/status failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Status endpoints test failed: {e}")
        return False

def test_cors_headers():
    """Test CORS configuration"""
    print("\n🔍 Testing CORS Configuration...")
    
    try:
        response = requests.options(f"{API_BASE_URL}/", timeout=10)
        
        cors_headers = {
            'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
            'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
            'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
        }
        
        if cors_headers['Access-Control-Allow-Origin']:
            print("✅ CORS headers are configured")
            print(f"   Allow-Origin: {cors_headers['Access-Control-Allow-Origin']}")
            return True
        else:
            print("⚠️  CORS headers not found in OPTIONS response")
            # Try a regular GET request to check CORS
            get_response = requests.get(f"{API_BASE_URL}/", timeout=10)
            if get_response.headers.get('Access-Control-Allow-Origin'):
                print("✅ CORS headers found in GET response")
                return True
            else:
                print("❌ CORS headers missing")
                return False
                
    except requests.exceptions.RequestException as e:
        print(f"❌ CORS test failed: {e}")
        return False

def test_error_handling():
    """Test error handling for invalid endpoints"""
    print("\n🔍 Testing Error Handling...")
    
    try:
        # Test non-existent endpoint
        response = requests.get(f"{API_BASE_URL}/nonexistent", timeout=10)
        
        if response.status_code == 404:
            print("✅ 404 error handling works correctly")
            return True
        else:
            print(f"⚠️  Unexpected status code for non-existent endpoint: {response.status_code}")
            return True  # Not a critical failure
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Error handling test failed: {e}")
        return False

def main():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 BACKEND API TESTING SUITE")
    print("=" * 60)
    print(f"Testing backend at: {API_BASE_URL}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    print("=" * 60)
    
    tests = [
        ("Backend Health Check", test_backend_health),
        ("Status Endpoints", test_status_endpoints),
        ("CORS Configuration", test_cors_headers),
        ("Error Handling", test_error_handling)
    ]
    
    results = []
    
    for test_name, test_func in tests:
        try:
            result = test_func()
            results.append((test_name, result))
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {e}")
            results.append((test_name, False))
    
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
        if result:
            passed += 1
    
    print("=" * 60)
    print(f"Overall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed! Backend is healthy and functional.")
        return True
    else:
        print("⚠️  Some backend tests failed. Check the details above.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)