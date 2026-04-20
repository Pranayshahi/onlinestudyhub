/**
 * Generic API requester for OnlineStudyHub
 * Handles base URL prefixing, JSON headers, auth token injection, and error parsing.
 */

export async function api(path, { method = 'GET', body = null, token = null, headers = {} } = {}) {
  // Use provided token or fall back to localStorage
  const activeToken = token || localStorage.getItem('admin_token') || localStorage.getItem('osh_user_token');

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (activeToken) {
    defaultHeaders['Authorization'] = `Bearer ${activeToken}`;
  }

  const res = await fetch(`/api${path}`, {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : null,
  });

  const contentType = res.headers.get('content-type') || '';
  
  if (contentType.includes('application/json')) {
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || data.error || `Request failed with status ${res.status}`);
    }
    return data;
  } else {
    // Handle non-JSON responses (possibly errors)
    const text = await res.text();
    if (!res.ok) {
      throw new Error(`Server error (${res.status}): ${text.substring(0, 100)}`);
    }
    return text;
  }
}
