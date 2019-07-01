class Mpesa{    
  constructor(env,shortcode){    
    this.name=name;    
    this.age=age;
  }
  
  token(){
    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      return data.access_token;
      })
    })  
  }
  
  confirmTrans(){}
  
  validateTrans(){}
}

class STK extends Mpesa {
  send(phone, amount, ref){
    const url = 'https://randomuser.me/api';
    // The data we are going to send in our request
    let data = {
        name: 'Sara'
    }
    // The parameters we are gonna pass to the fetch function
    let fetchData = { 
        method: 'POST', 
        body: data,
        headers: new Headers()
    }
    fetch(url, fetchData)
    .then(function() {
        // Handle response you get from the server
    });
  }
}
