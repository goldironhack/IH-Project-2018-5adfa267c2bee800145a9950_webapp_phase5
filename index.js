var map;
const crimes = "https://data.cityofnewyork.us/resource/9s4h-37hy.json?$where=cmplnt_fr_dt=\"2015-12-31T00:00:00.000\"&$limit=1000";
const houses = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD";
const Neighborhood= "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";

var countCrimesQ = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var countCrimesSI= [0,0,0];
var countCrimesB= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var countCrimesM= [0,0,0,0,0,0,0,0,0,0,0,0];
var countCrimesBr= [0,0,0,0,0,0,0,0,0,0,0,0];
var countHousesBronx = [0,0,0,0,0,0,0,0,0,0,0,0];
var countHousesBrooklyn=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var countHousesQueens = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var countHousesStatenIsland = [0,0,0];
var countHousesManhattan = [0,0,0,0,0,0,0,0,0,0,0,0];
var infoRows = [];
var infoRowss =[];
var test = 0;
var ny_marker;
var BK5_marker;
var BK3_marker;
var MN10_marker;
var QN12_marker;
var MN11_marker;
var BX03_marker;
var SI01_marker;
var BX04_marker;
var QN13_marker;
var BSI02_marker;
//------------------Databases---------------------------//
function getData(){
  var data = $.get(crimes,function(){}) //guarda la informacion del get en data.
  var data2 =$.get(houses,function(){})

    .done(function(){

      /*var myString = data.responseJSON.data[0][9];
      var myTruncatedString = myString.substring(7,data.responseJSON.data[0][9].lenght-1);*/

      for (var i = 0; i < data.responseJSON.length; i++) {
        if(data.responseJSON[i].boro_nm=='QUEENS'){
          if(data.responseJSON[i].addr_pct_cd == '114'){
            countCrimesQ[0]++;
          }
          if(data.responseJSON[i].addr_pct_cd == '108'){
            countCrimesQ[1]++;
          }if(data.responseJSON[i].addr_pct_cd == '104'){
            countCrimesQ[4]++;
          }if(data.responseJSON[i].addr_pct_cd == '112'){
            countCrimesQ[5]++;
          }if(data.responseJSON[i].addr_pct_cd == '115'){
            countCrimesQ[2]++;
          }if(data.responseJSON[i].addr_pct_cd == '110'){
            countCrimesQ[3]++;
          }if(data.responseJSON[i].addr_pct_cd == '102'){
            countCrimesQ[8]++;
          }if(data.responseJSON[i].addr_pct_cd == '106'){
            countCrimesQ[9]++;
          }if(data.responseJSON[i].addr_pct_cd == '105'){
            countCrimesQ[12]++;
          }if(data.responseJSON[i].addr_pct_cd == '113'|| data.responseJSON[i].addr_pct_cd == '103' ){
            countCrimesQ[11]++;
          }if(data.responseJSON[i].addr_pct_cd == '107'){
            countCrimesQ[7]++;
          }if(data.responseJSON[i].addr_pct_cd == '111'){
            countCrimesQ[10]++;
          }if(data.responseJSON[i].addr_pct_cd == '109'){
            countCrimesQ[6]++;
          }if(data.responseJSON[i].addr_pct_cd == '101'|| data.responseJSON[i].addr_pct_cd == '100' ){
            countCrimesQ[13]++;
          }
        }
        if(data.responseJSON[i].boro_nm=='STATEN ISLAND'){
          if(data.responseJSON[i].addr_pct_cd == '120'){
            countCrimesSI[0]++;
          }
          if(data.responseJSON[i].addr_pct_cd == '121' || data.responseJSON[i].addr_pct_cd == '122'){
            countCrimesSI[1]++;
          }if(data.responseJSON[i].addr_pct_cd == '123'){
            countCrimesSI[2]++;
          }
        }
         if(data.responseJSON[i].boro_nm=='BROOKLYN'){
           if(data.responseJSON[i].addr_pct_cd == '94' || data.responseJSON[i].addr_pct_cd == '90'){
             countCrimesB[0]++;
           }if(data.responseJSON[i].addr_pct_cd == '60'){
             countCrimesB[12]++;
           }if(data.responseJSON[i].addr_pct_cd == '61'|| data.responseJSON[i].addr_pct_cd == '63'){
             countCrimesB[14]++;
           }if(data.responseJSON[i].addr_pct_cd == '62'){
             countCrimesB[10]++;
           }if(data.responseJSON[i].addr_pct_cd == '68'){
             countCrimesB[9]++;
           }if(data.responseJSON[i].addr_pct_cd == '66'){
             countCrimesB[11]++;
           }if(data.responseJSON[i].addr_pct_cd == '72'){
             countCrimesB[6]++;
           }if(data.responseJSON[i].addr_pct_cd == '78'|| data.responseJSON[i].addr_pct_cd == '76'){
             countCrimesB[5]++;
           }if(data.responseJSON[i].addr_pct_cd == '84'|| data.responseJSON[i].addr_pct_cd == '88'){
             countCrimesB[1]++;
           }if(data.responseJSON[i].addr_pct_cd == '79'|| data.responseJSON[i].addr_pct_cd == '81' ){
             countCrimesB[2]++;
           }if(data.responseJSON[i].addr_pct_cd == '83'){
             countCrimesB[3]++;
           }if(data.responseJSON[i].addr_pct_cd == '75'){
             countCrimesB[4]++;
           }if(data.responseJSON[i].addr_pct_cd == '73'){
             countCrimesB[15]++;
           }if(data.responseJSON[i].addr_pct_cd == '77'){
             countCrimesB[7]++;
           }if(data.responseJSON[i].addr_pct_cd == '71'){
             countCrimesB[8]++;
           }if(data.responseJSON[i].addr_pct_cd == '70' ){
             countCrimesB[13]++;
           }if(data.responseJSON[i].addr_pct_cd == '67' ){
             countCrimesB[16]++;
           }if(data.responseJSON[i].addr_pct_cd == '69'){
             countCrimesB[17]++;
           }
        }
        if(data.responseJSON[i].boro_nm=='MANHATTAN'){
          if(data.responseJSON[i].addr_pct_cd == '1'){
            countCrimesM[0]++;
          }
          if(data.responseJSON[i].addr_pct_cd == '6'){
            countCrimesM[1]++;
          }if(data.responseJSON[i].addr_pct_cd == '5' ||data.responseJSON[i].addr_pct_cd == '7' ||data.responseJSON[i].addr_pct_cd == '9' ){
            countCrimesM[2]++;
          }if(data.responseJSON[i].addr_pct_cd == '10' ||data.responseJSON[i].addr_pct_cd == '20'){
            countCrimesM[3]++;
          }if(data.responseJSON[i].addr_pct_cd == '13'){
            countCrimesM[4]++;
          }if(data.responseJSON[i].addr_pct_cd == '17'){
            countCrimesM[5]++;
          }if(data.responseJSON[i].addr_pct_cd == '19'){
            countCrimesM[7]++;
          }if(data.responseJSON[i].addr_pct_cd == '20'){
            countCrimesM[6]++;
          }if(data.responseJSON[i].addr_pct_cd == '24' ||data.responseJSON[i].addr_pct_cd == '26' ||data.responseJSON[i].addr_pct_cd == '30' ){
            countCrimesM[8]++;
          }if(data.responseJSON[i].addr_pct_cd == '28' ||data.responseJSON[i].addr_pct_cd == '32'){
            countCrimesM[9]++;
          }if(data.responseJSON[i].addr_pct_cd == '33' ||data.responseJSON[i].addr_pct_cd == '34'){
            countCrimesM[11]++;
          }if(data.responseJSON[i].addr_pct_cd == '23' ||data.responseJSON[i].addr_pct_cd == '25'){
            countCrimesM[10]++;
          }
        }
        if(data.responseJSON[i].boro_nm=='BRONX'){
          if(data.responseJSON[i].addr_pct_cd == '40'){
            countCrimesBr[0]++;
          }
          if(data.responseJSON[i].addr_pct_cd == '41'){
            countCrimesBr[1]++;
          }if(data.responseJSON[i].addr_pct_cd == '42'){
            countCrimesBr[2]++;
          }if(data.responseJSON[i].addr_pct_cd == '43'){
            countCrimesBr[8]++;
          }if(data.responseJSON[i].addr_pct_cd == '44'){
            countCrimesBr[3]++;
          }if(data.responseJSON[i].addr_pct_cd == '45'){
            countCrimesBr[9]++;
          }if(data.responseJSON[i].addr_pct_cd == '46'){
            countCrimesBr[4]++;
          }if(data.responseJSON[i].addr_pct_cd == '47'){
            countCrimesBr[11]++;
          }if(data.responseJSON[i].addr_pct_cd == '48'){
            countCrimesBr[5]++;
          }if(data.responseJSON[i].addr_pct_cd == '49'){
            countCrimesBr[10]++;
          }if(data.responseJSON[i].addr_pct_cd == '50'){
            countCrimesBr[7]++;
          }if(data.responseJSON[i].addr_pct_cd == '52'){
            countCrimesBr[6]++;
          }
        }
      }

      for (var i = 0; i < data2.responseJSON.data.length; i++) {
        if(data2.responseJSON.data[i][15]=='Queens'){
          if(data2.responseJSON.data[i][19]=='QN-01'){
            countHousesQueens[0]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-02'){
            countHousesQueens[1]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-03'){
            countHousesQueens[2]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-04'){
            countHousesQueens[3]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-05'){
            countHousesQueens[4]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-06'){
            countHousesQueens[5]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-07'){
            countHousesQueens[6]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-08'){
            countHousesQueens[7]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-09'){
            countHousesQueens[8]++;
          }countHousesQueens
          if(data2.responseJSON.data[i][19]=='QN-10'){
            countHousesQueens[9]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-11'){
            countHousesQueens[10]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-12'){
            countHousesQueens[11]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-13'){
            countHousesQueens[12]++;
          }
          if(data2.responseJSON.data[i][19]=='QN-14'){
            countHousesQueens[13]++;
          }
        }
        if(data2.responseJSON.data[i][15]=='Staten Island'){
          if(data2.responseJSON.data[i][19]=='SI-01'){
            countHousesStatenIsland[0]++;
          }
          if(data2.responseJSON.data[i][19]=='SI-02'){
            countHousesStatenIsland[1]++;
          }
          if(data2.responseJSON.data[i][19]=='SI-03'){
            countHousesStatenIsland[2]++;
          }
        }
         if(data2.responseJSON.data[i][15]=='Brooklyn'){
           if(data2.responseJSON.data[i][19]=='BK-01'){
             countHousesBrooklyn[0]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-02'){
             countHousesBrooklyn[1]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-03'){
             countHousesBrooklyn[2]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-04'){
             countHousesBrooklyn[3]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-05'){
             countHousesBrooklyn[4]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-06'){
             countHousesBrooklyn[5]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-07'){
             countHousesBrooklyn[6]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-08'){
             countHousesBrooklyn[7]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-09'){
             countHousesBrooklyn[8]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-10'){
             countHousesBrooklyn[9]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-11'){
             countHousesBrooklyn[10]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-12'){
             countHousesBrooklyn[11]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-13'){
             countHousesBrooklyn[12]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-14'){
             countHousesBrooklyn[13]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-15'){
             countHousesBrooklyn[14]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-16'){
             countHousesBrooklyn[15]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-17'){
             countHousesBrooklyn[16]++;
           }
           if(data2.responseJSON.data[i][19]=='BK-18'){
             countHousesBrooklyn[17]++;
           }

        }
        if(data2.responseJSON.data[i][15]=='Manhattan'){
          if(data2.responseJSON.data[i][19]=='MN-01'){
            countHousesManhattan[0]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-02'){
            countHousesManhattan[1]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-03'){
            countHousesManhattan[2]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-04'){
            countHousesManhattan[3]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-05'){
            countHousesManhattan[4]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-06'){
            countHousesManhattan[5]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-07'){
            countHousesManhattan[6]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-08'){
            countHousesManhattan[7]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-09'){
            countHousesManhattan[8]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-10'){
            countHousesManhattan[9]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-11'){
            countHousesManhattan[10]++;
          }
          if(data2.responseJSON.data[i][19]=='MN-12'){
            countHousesManhattan[11]++;
          }
        }
        if(data2.responseJSON.data[i][15]=='Bronx'){
          if(data2.responseJSON.data[i][19]=='BX-01'){
            countHousesBronx[0]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-02'){
            countHousesBronx[1]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-03'){
            countHousesBronx[2]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-04'){
            countHousesBronx[3]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-05'){
            countHousesBronx[4]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-06'){
            countHousesBronx[5]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-07'){
            countHousesBronx[6]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-08'){
            countHousesBronx[7]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-09'){
            countHousesBronx[8]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-10'){
            countHousesBronx[9]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-11'){
            countHousesBronx[10]++;
          }
          if(data2.responseJSON.data[i][19]=='BX-12'){
            countHousesBronx[11]++;
          }
        }
      }


      infoRows.push("Bronx-01",countCrimesBr[0],countHousesBronx[0]);
      infoRows.push("Bronx-02",countCrimesBr[1],countHousesBronx[1]);
      infoRows.push("Bronx-05",countCrimesBr[4],countHousesBronx[4]);
      infoRows.push("Bronx-06",countCrimesBr[5],countHousesBronx[5]);
      infoRows.push("Bronx-07",countCrimesBr[6],countHousesBronx[6]);
      infoRows.push("Bronx-08",countCrimesBr[7],countHousesBronx[7]);
      infoRows.push("Bronx-09",countCrimesBr[8],countHousesBronx[8]);
      infoRows.push("Bronx-10",countCrimesBr[9],countHousesBronx[9]);
      infoRows.push("Bronx-11",countCrimesBr[10],countHousesBronx[10]);
      infoRows.push("Bronx-12",countCrimesBr[11],countHousesBronx[11]);
      infoRows.push("Brooklyn-01",countCrimesB[0],countHousesBrooklyn[0]);
      infoRows.push("Brooklyn-02",countCrimesB[1],countHousesBrooklyn[1]);
      infoRows.push("Brooklyn-05",countCrimesB[4],countHousesBrooklyn[4]);
      infoRows.push("Brooklyn-03",countCrimesB[2],countHousesBrooklyn[2]);
      infoRows.push("Brooklyn-04",countCrimesB[3],countHousesBrooklyn[3]);
      infoRows.push("Brooklyn-06",countCrimesB[5],countHousesBrooklyn[5]);
      infoRows.push("Brooklyn-07",countCrimesB[6],countHousesBrooklyn[6]);
      infoRows.push("Brooklyn-08",countCrimesB[7],countHousesBrooklyn[7]);
      infoRows.push("Brooklyn-09",countCrimesB[8],countHousesBrooklyn[8]);
      infoRows.push("Brooklyn-10",countCrimesB[9],countHousesBrooklyn[9]);
      infoRows.push("Brooklyn-11",countCrimesB[10],countHousesBrooklyn[10]);
      infoRows.push("Brooklyn-12",countCrimesB[11],countHousesBrooklyn[11]);
      infoRows.push("Brooklyn-13",countCrimesB[12],countHousesBrooklyn[12]);
      infoRows.push("Brooklyn-14",countCrimesB[13],countHousesBrooklyn[13]);
      infoRows.push("Brooklyn-15",countCrimesB[14],countHousesBrooklyn[14]);
      infoRows.push("Brooklyn-16",countCrimesB[15],countHousesBrooklyn[15]);
      infoRows.push("Brooklyn-17",countCrimesB[16],countHousesBrooklyn[16]);
      infoRows.push("Brooklyn-18",countCrimesB[17],countHousesBrooklyn[17]);
      infoRows.push("Queens-01",countCrimesQ[0],countHousesQueens[0]);
      infoRows.push("Queens-02",countCrimesQ[1],countHousesQueens[1]);
      infoRows.push("Queens-03",countCrimesQ[2],countHousesQueens[2]);
      infoRows.push("Queens-04",countCrimesQ[3],countHousesQueens[3]);
      infoRows.push("Queens-05",countCrimesQ[4],countHousesQueens[4]);
      infoRows.push("Queens-06",countCrimesQ[5],countHousesQueens[5]);
      infoRows.push("Queens-07",countCrimesQ[6],countHousesQueens[6]);
      infoRows.push("Queens-08",countCrimesQ[7],countHousesQueens[7]);
      infoRows.push("Queens-09",countCrimesQ[8],countHousesQueens[8]);
      infoRows.push("Queens-10",countCrimesQ[9],countHousesQueens[9]);
      infoRows.push("Queens-11",countCrimesQ[10],countHousesQueens[10]);
      infoRows.push("Manhattan-10",countCrimesM[9],countHousesManhattan[9]);
      infoRows.push("Queens-12",countCrimesQ[11],countHousesQueens[11]);
      infoRows.push("Manhattan-11",countCrimesM[10],countHousesManhattan[10]);
      infoRows.push("Bronx-03",countCrimesBr[2],countHousesBronx[2]);
      infoRows.push("StatenIsland-01",countCrimesSI[0],countHousesStatenIsland[0]);
      infoRows.push("Bronx-04",countCrimesBr[3],countHousesBronx[3]);
      infoRows.push("Queens-13",countCrimesQ[12],countHousesQueens[12]);
      infoRows.push("StatenIsland-02",countCrimesSI[1],countHousesStatenIsland[1]);

      infoRows.push("Queens-14",countCrimesQ[13],countHousesQueens[13]);
      infoRows.push("StatenIsland-03",countCrimesSI[2],countHousesStatenIsland[2]);
      infoRows.push("Manhattan-01",countCrimesM[0],countHousesManhattan[0]);
      infoRows.push("Manhattan-02",countCrimesM[1],countHousesManhattan[1]);
      infoRows.push("Manhattan-03",countCrimesM[2],countHousesManhattan[2]);
      infoRows.push("Manhattan-04",countCrimesM[3],countHousesManhattan[3]);
      infoRows.push("Manhattan-05",countCrimesM[4],countHousesManhattan[4]);
      infoRows.push("Manhattan-06",countCrimesM[5],countHousesManhattan[5]);
      infoRows.push("Manhattan-07",countCrimesM[6],countHousesManhattan[6]);
      infoRows.push("Manhattan-08",countCrimesM[7],countHousesManhattan[7]);
      infoRows.push("Manhattan-09",countCrimesM[8],countHousesManhattan[8]);
      infoRows.push("Manhattan-12",countCrimesM[11],countHousesManhattan[11]);

      var tableReference = $("#tableBody")[0];
      var NewRow,district,crimes,houses;
      for (var s = 0; s < infoRows.length; s=s+3) {
        newRow = tableReference.insertRow(tableReference.rows.length);

        if(infoRows[s]=='Brooklyn-05'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          color = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          var str ="red";
          var result = str.fontcolor("red");
          color.innerHTML = result;


        }
        if(infoRows[s]=='Brooklyn-03'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="red";
          var result = str.fontcolor("red");
          color.innerHTML = result;

        }
        if(infoRows[s]=='Manhattan-10'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="blue";
          var result = str.fontcolor("blue");
          color.innerHTML = result;

        }
        if(infoRows[s]=='Queens-12'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="orange";
          var result = str.fontcolor("orange");
          color.innerHTML = result;

        }
        if(infoRows[s]=='Manhattan-11'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="blue";
          var result = str.fontcolor("blue");
          color.innerHTML = result;

        }
        if(infoRows[s]=='Bronx-03'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="purple";
          var result = str.fontcolor("purple");
          color.innerHTML = result;

        }
        if(infoRows[s]=='StatenIsland-01'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="green";
          var result = str.fontcolor("green");
          color.innerHTML = result;

        }
        if(infoRows[s]=='Bronx-04'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="purple";
          var result = str.fontcolor("purple");
          color.innerHTML = result;

        }
        if(infoRows[s]=='Queens-13'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="orange";
          var result = str.fontcolor("orange");
          color.innerHTML = result;

        }
        if(infoRows[s]=='StatenIsland-02'){
          district = newRow.insertCell();
          crimes = newRow.insertCell();
          houses = newRow.insertCell();
          district.innerHTML =infoRows[s];
          crimes.innerHTML = infoRows[s+1];
          houses.innerHTML = infoRows[s+2];
          color = newRow.insertCell();
          var str ="green";
          var result = str.fontcolor("green");
          color.innerHTML = result;

        }
      }
    })

    .fail(function(error){
      console.log(error);
    })
  }


//----------Google Maps--------------------------//
/*function colores(){
  var color = ["#00FFFF", "#F4FA58", "#BCA9F5", "#DF01D7", "#CEF6F5"] ;
  return color[Math.floor(Math.random() * color.length)];
}*/

var StateIsland = [59, 64, 15];
var Bronx = [18, 19, 24, 14, 30, 31, 16, 43, 20, 53, 22, 28];
var Brooklyn = [49, 71, 50, 11, 52, 61, 62, 25, 9, 6, 1, 7, 5, 4, 57, 8, 55, 56];
var Manhattan = [68, 65, 37, 10, 47, 48, 41, 66, 38, 40, 67, 39];
var Queens = [60, 13, 35, 69, 63, 70, 21, 45, 32, 29, 46, 2, 33, 27];

var ny_coordinates= {lat:40.729064,lng: -73.996508};
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: ny_coordinates
        });

        var BK05_coordinates= {lat:40.669440, lng:-73.879251}
        BK05_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/red-dot.png'),
          position: BK05_coordinates,
          map: map

        });
        var BK03_coordinates= {lat:40.685970, lng:-73.941837}
        BK03_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/red-dot.png'),
          position: BK03_coordinates,
          map: map

        });
        var MN10_coordinates= {lat:40.807834, lng:-73.945183}
        MN10_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/purple-dot.png'),
          position: MN10_coordinates,
          map: map

        });
        var MN11_coordinates= {lat:40.797978, lng:-73.938622}
        MN11_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/purple-dot.png'),
          position: MN11_coordinates,
          map: map

        });
        var QN12_coordinates= {lat:40.690220, lng:-73.779495}
        QN12_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/orange-dot.png'),
          position: QN12_coordinates,
          map: map

        });
        var QN13_coordinates= {lat:40.711099, lng: -73.738429}
        QN13_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/orange-dot.png'),
          position: QN13_coordinates,
          map: map

        });
        var BX03_coordinates= {lat:40.857244, lng: -73.885476}
        BX03_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'),
          position: BX03_coordinates,
          map: map

        });
        var BX04_coordinates= {lat:40.831194, lng: -73.922919}
        BX04_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'),
          position: BX04_coordinates,
          map: map

        });
        var SI01_coordinates= {lat:40.623251, lng: -74.112772}
        SI01_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/green-dot.png'),
          position: SI01_coordinates,
          map: map

        });
        var SI02_coordinates= {lat:40.581964, lng: -74.145659}
       SI024_marker = new google.maps.Marker({
          icon:('http://maps.google.com/mapfiles/ms/icons/green-dot.png'),
          position:  SI02_coordinates,
          map: map

        });
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        markerEvents(BK05_marker);
        markerEvents(BK03_marker);
        map.data.loadGeoJson(
            'https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');




    map.data.setStyle(function(feature) {
    var test = feature.getId('id');
    //console.log(test);
    var color;
    for (var i = 0; i < StateIsland.length; i++) {
      if(test == StateIsland[i]){
        color = 'green';
      }
    }


    for (var i = 0; i < Bronx.length; i++) {
      if(test == Bronx[i]){
        color = 'yellow';
      }
    }

    for (var i = 0; i < Brooklyn.length; i++) {
      if(test == Brooklyn[i]){
        color = 'red';
      }
    }

    for (var i = 0; i < Manhattan.length; i++) {
      if(test == Manhattan[i]){
        color = 'blue';
      }
    }

    for (var i = 0; i < Queens.length; i++) {
      if(test == Queens[i]){
        color = 'orange';
      }
    }



    //var color = test == 72 ? 'red' : 'blue';
    return {
      fillColor: color,
      strokeWeight: 1
          };
        });

    ny_marker = new google.maps.Marker({
    position: ny_coordinates,
    map: map,
    title: 'NYU Stern School of Business'
  });
      }

      function markerEvents(marker){
        if(marker != "undefined"){
          marker.addListener("click",function(){
            getRoute();
          });
        }
      }
      function getRoute(){
        var request =  {
          origin: ny_marker.position,
          destination: BK03_marker.position,

          travelMode: 'DRIVING'
        }
        directionsRenderer.setMap(map);
        directionsService.route(request,function(result,status){
          if (status == "OK") {
            directionsRenderer.setDirections(result);
          }
        });

      }




//-------Finish-----///

$("document").ready(function(){
    $("#getData").on("click",getData)

})
