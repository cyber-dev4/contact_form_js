function sendmail(){
           
    var name = $('#').val();     // var #id form (html)
    var email = $('#').val();    // var #id form (html)
    var number = $ ('#').val();    // var #id form (html)
    var message = $('#').val();    // var #id form (html)

    // var body = $('#body').val();

    var Body='#'+name+'<br># '+email+'<br> # '+number+'<br># '+message;
    //console.log(name, phone, email, message);

    Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: '', // mail reciever
        From: " " + email, // sender mail
        Subject: " ",
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your message has been sent');
            }
            else{
                console.error (message);
                alert('Error. ')
                
            }

        }
    );



}
