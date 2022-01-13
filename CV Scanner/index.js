console.log('this is a index file')
// consider the below data coming from server i.e fetching 
const data = [
    {
        name : 'sahil',
        age : 21,
        city : 'Mumbai',
        language : 'Javascript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/men/50.jpg'

    },
    {
        name: 'Shaikh Athar',
        age: 23,
        city: 'Delhi',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/53.jpg'
    },
    {
        name: 'Abhishek Almieda',
        age: 22,
        city: 'Ballarpur',
        language: 'C',
        framework: 'C framework',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
    {
        name: 'Mahendra Singh Dhoni',
        age: 40,
        city: 'Ranchi',
        language: 'Java',
        framework: 'Java Framework',
        image: 'https://randomuser.me/api/portraits/men/56.jpg'
    },
]

// below function takes an array of data and returns the  iterated values  
function cvIterator(data){

    let index = 0;
     return {
         next : function(){
             return index < data.length ? 
             {value : data[index++],done  : false}:
             {dpne : true}
         }
     }

}

let candidate = cvIterator(data);
nextCV()

// when the user clicks on the button Next on the DOM the below function nextCV must run 
let next = document.getElementById('next');
next.addEventListener('click' , nextCV)
function nextCV(){

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    let currentCandidate = candidate.next().value;
    if (currentCandidate != undefined) {

        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                                <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
                            </ul>`;
    } 
    else {
        alert('No more applications are left');
        window.location.reload();
    }
    


}
