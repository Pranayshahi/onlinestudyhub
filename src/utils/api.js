/**
 * Generic API requester for OnlineStudyHub
 * Handles base URL prefixing, JSON headers, auth token injection, and error parsing.
 */

export async function api(path, { method = 'GET', body = null, token = null, headers = {} } = {}) {
  // Use provided token or fall back to localStorage (teacher or student)
  const studentData = (() => { try { return JSON.parse(localStorage.getItem('osh_user') || 'null'); } catch { return null; } })();
  const activeToken = token || localStorage.getItem('admin_token') || studentData?.token;

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
  
  if (res.status === 503) {
    throw new Error('Something went wrong. Please try again in a moment.');
  }

  if (contentType.includes('application/json')) {
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || data.error || `Request failed with status ${res.status}`);
    }
    return data;
  } else {
    const text = await res.text();
    if (!res.ok) {
      throw new Error(`Server error (${res.status}): ${text.substring(0, 100)}`);
    }
    return text;
  }
}
