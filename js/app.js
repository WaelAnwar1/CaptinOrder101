


function Get_Stations_From_Json()
{
    $.ajax({
        url: './db/stations.json',
        success:function(response){
            //console.log(response);
            for(let i=0; i < response.length; i++)
            {
                $("#stations-bar").append(`
                <div class="highlight-card">
                        <img class="highlight-img" src="./images/icons/${response[i].station_image}">
                        <div class="highlight-desc">
                            <h5>${response[i].station_name}</h5>
                        </div>
                </div>
                `);
            }
        },
    })
}
Get_Stations_From_Json();
//stations-bar