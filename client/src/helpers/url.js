//* URL to the backend server
// export const baseurl = 'https://192.168.68.88:4300'



//  export const baseurl = 'https://danhenrydev.com:443/api'  

const PORT = 4433
// const PORT = process.env.PORT;
// export const baseurl = `http://localhost:${PORT}`
export const baseurl = `http://127.0.0.1:${PORT}`

// Redirects to machine's local (nodemon) Was working on development server, but not in production -- refers back to the host machine, not the server
// export const baseurl = 'http://localhost:4300'


// Didn't work:
// export const baseurl = 'https://localhost:4300'
