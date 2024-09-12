//https://crfdkrynbwvauyrnuvmc.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZmRrcnluYnd2YXV5cm51dm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTIyNjAsImV4cCI6MjA0MTUyODI2MH0.O22J8QS22BKJY5zhPqmOcHsy7j0qCNJTZpwOh-dKXfc

fetch("https://crfdkrynbwvauyrnuvmc.supabase.co/rest/v1/TSL", {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZmRrcnluYnd2YXV5cm51dm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTIyNjAsImV4cCI6MjA0MTUyODI2MH0.O22J8QS22BKJY5zhPqmOcHsy7j0qCNJTZpwOh-dKXfc"
    }
})
.then(res=>res.json())
.then(showData)

function showData(items){
    console.log(items);
    //items.forEach()
}

//function (){ }