$(document).ready(() => {
    // $('.loading').hide()
    $('.logout-btn').on('click', (e) => {
        localStorage.removeItem('login-id');
        location.href = 'login'
    })


    $.get(`${getApiUrl()}/${localStorage.getItem('login-id')}/today`, function (data) {
        console.log(data); // HTML content of the jQuery.ajax page
        if (!data.error) {
            for (let i = 1; i < 6; i++) {
                $(`p:contains('Subject ${i}')`).text(data[i].subject)
                $(`p:contains('Class ${i}')`).text(data[i].class)
                $(`p:contains('Teacher ${i}')`).text(data[i].teacher)
    
    
            }
            if(data.items[0]){
                for (let index = 0; index < data.items.length; index++) {
                    const element = data.items[index];
                    if(element.need){
                        $('.items').append(`
                        <li class="need item">${element.name}</li>
                        `)
                    }else{
                        $('.items').append(`
                        <li class="dont-need item">${element.name}</li>
                        `)
                    }
                    
                }
            }else{
                $(".items").hide()
            }
            
    
        } else {
            location.href = "./login"
        }
        
    });

    $.get(`${getApiUrl()}/${localStorage.getItem('login-id')}`, function (data) {
        let dayName;
        console.log(data);

        for (let week = 1; week < 3; week++) {
            for (let day = 1; day < 6; day++){
                if(day === 1) {dayName = 'monday';}
                if(day === 2) {dayName = 'tuesday';}
                if(day === 3) {dayName = 'wednesday';}
                if(day === 4) {dayName = 'thursday';}
                if(day === 5) {dayName = 'friday';}

                for (let period = 1; period < 6; period++){
                    

                    $(`.week${week}>table>tbody>tr>td>p:contains('Day ${day} Period ${period} Subject')`).text(data[`week${week}`][dayName][period].subject)
                    $(`.week${week}>table>tbody>tr>td>p:contains('Day ${day} Period ${period} Class')`).text(data[`week${week}`][dayName][period].class)
                    $(`.week${week}>table>tbody>tr>td>p:contains('Day ${day} Period ${period} Teacher')`).text(data[`week${week}`][dayName][period].teacher)
                }
            }
        }

        $('.loading').hide()
    })
})