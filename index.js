import { initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, push, get, update} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDe9qRyWKoo377m7MQ-wnDZZ-InjutxTg",
  authDomain: "test1-15fd6.firebaseapp.com",
  databaseURL: "https://test1-15fd6-default-rtdb.firebaseio.com",
  projectId: "test1-15fd6",
  storageBucket: "test1-15fd6.appspot.com",
  messagingSenderId: "844739593407",
  appId: "1:844739593407:web:0e0976e353f763be04320a",
  measurementId: "G-0NJMP6GGFK"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const name = document.getElementById("name");
const email = document.getElementById("email");
const mobNum = document.getElementById("mobNum");
const jobId = document.getElementById("jobId");
const resume = document.getElementById("resume");

const form1 = document.getElementById("form1");

form1.addEventListener("submit", (e) => {
    e.preventDefault();

    const n1 = name.value ;
    const e1 = email.value ;
    const m1 = mobNum.value ;
    const j1 = jobId.value ;
    const r1 = resume.value ;

    const jobsRef = ref(database, 'jobapplicants');
    push(jobsRef, {
        name: n1,
      email: e1,
      mobile: m1,
      jobid : j1,
      resume: r1
    }).then(() => {
      alert("Application submitted");
      // further actions or UI updates here
    }).catch((error) => {
      // Handle errors 
      alert("Error pushing data: ", error);
    });

        // Clear the form fields
        n1.value = '';
        e1.value = '';
        m1.value = '';
        j1.value = '';
        r1.value = '';

});
