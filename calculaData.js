function verifiData(inputDate) {
    
    var inputDate2 = new Date(inputDate.value);
    var currentDate = new Date();
    
    if (inputDate2 < currentDate) {
       
        alert('Você inseriu uma data anterior a atual !');
    }else 
    if (inputDate2 > currentDate) {
       
        alert('Você inseriu uma data posterior a atual !');
    }
};