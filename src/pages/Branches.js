import React, { useState, useEffect } from 'react';
import './Branches.css';


const branches = [
  {code:"002",branch:"Naubise, Dhading",name:"Shankar Singh Mahata",province:"Bagmati",phone:"9862547302",email:"naubise@infinitylbsl.com.np"},
  {code:"003",branch:"Talchowk, Kaski",name:"Krishna Baral",province:"Gandaki",phone:"9862547303",email:"talchowk@infinitylbsl.com.np"},
  {code:"004",branch:"Khairenitar, Tanahu",name:"Rita Mainali",province:"Gandaki",phone:"9862547304",email:"khairenitar@infinitylbsl.com.np"},
  {code:"005",branch:"Bhimad, Tanahu",name:"Krishna Mishra Rimal",province:"Gandaki",phone:"9862547305",email:"bhimad@infinitylbsl.com.np"},
  {code:"006",branch:"Chainpur, Chitwan",name:"Saraswati Paudel",province:"Bagmati",phone:"9862547306",email:"chainpur@infinitylbsl.com.np"},
  {code:"007",branch:"Gaindakot, Nawalpur",name:"Dipak Sing Thing",province:"Gandaki",phone:"9862547307",email:"gaindakot@infinitylbsl.com.np"},
  {code:"008",branch:"Danda, Nawalpur",name:"Ishwori Panta",province:"Gandaki",phone:"9862547308",email:"danda@infinitylbsl.com.np"},
  {code:"009",branch:"Bhumahi, Nawalparasi",name:"Madhav Gharti",province:"Lumbini",phone:"9862547309",email:"bhumahi@infinitylbsl.com.np"},
  {code:"010",branch:"Thuthipipal, Rupendehi",name:"Narendra Yadav",province:"Lumbini",phone:"9862547310",email:"thutipipal@infinitylbsl.com.np"},
  {code:"011",branch:"Amuwa, Rupendehi",name:"Dinesh Kumar Harijan",province:"Lumbini",phone:"9862547311",email:"amuwa@infinitylbsl.com.np"},
  {code:"012",branch:"Dudhras, Dang",name:"Anil Gurung",province:"Lumbini",phone:"9862547312",email:"dudhras@infinitylbsl.com.np"},
  {code:"013",branch:"Narti, Dang",name:"Laxman Dangi",province:"Lumbini",phone:"9862547313",email:"narti@infinitylbsl.com.np"},
  {code:"014",branch:"Parawanipur, Bara",name:"Amit Chaudhary",province:"Madhesh",phone:"9862547314",email:"parwanipur@infinitylbsl.com.np"},
  {code:"015",branch:"Chandrapur, Rautahat",name:"Suresh Kathariya",province:"Madhesh",phone:"9862547315",email:"chandrapur@infinitylbsl.com.np"},
  {code:"016",branch:"Harion, Sarlahi",name:"Arun Kumar Yadav",province:"Madhesh",phone:"9862547316",email:"harion@infinitylbsl.com.np"},
  {code:"017",branch:"Bardibas, Mahottari",name:"Kapil Dev Bhandari",province:"Madhesh",phone:"9862547317",email:"bardibas@infinitylbsl.com.np"},
  {code:"018",branch:"Kadarbona, Saptari",name:"Mahesh Yadav",province:"Madhesh",phone:"9862547318",email:"kadarbona@infinitylbsl.com.np"},
  {code:"019",branch:"Mahendranagar, Kanchanpur",name:"Bharat Bahadur Mahara",province:"Sudurpaschim",phone:"9862547319",email:"mahendranagar@infinitylbsl.com.np"},
  {code:"020",branch:"Durgauli, Kailali",name:"Manoj Mayal",province:"Sudurpaschim",phone:"9862547320",email:"durgauli@infinitylbsl.com.np"},
  {code:"021",branch:"Parsauni, Bara",name:"Reeturaj Chaudhary",province:"Madhesh",phone:"9862547321",email:"prasauni@infinitylbsl.com.np"},
  {code:"022",branch:"Sapahi, Bara",name:"Denish Prasad Chaudhary",province:"Madhesh",phone:"9862547322",email:"sapahi@infinitylbsl.com.np"},
  {code:"023",branch:"Pipara, Mahottari",name:"Rabindra Lal Das",province:"Madhesh",phone:"9862547323",email:"pipara@infinitylbsl.com.np"},
  {code:"024",branch:"Dhangadhi, Siraha",name:"Santaram Chaudhary",province:"Madhesh",phone:"9862547324",email:"dhangadhi@infinitylbsl.com.np"},
  {code:"025",branch:"Inaruwa, Sunsari",name:"Manjaya Kumar Chaudhary",province:"Koshi",phone:"9862547325",email:"inaruwa@infinitylbsl.com.np"},
  {code:"026",branch:"Charaali, Jhapa",name:"Lekhnath Shankar",province:"Koshi",phone:"9862547326",email:"charaali@infinitylbsl.com.np"},
  {code:"027",branch:"Basgadhi, Bardiya",name:"Ashok Chaudhary",province:"Lumbini",phone:"9862547327",email:"basagadhi@infinitylbsl.com.np"},
  {code:"028",branch:"Attariya, Kailali",name:"Rajendra Singh Thagunna",province:"Sudurpaschim",phone:"9862547328",email:"attariya@infinitylbsl.com.np"},
  {code:"029",branch:"Birendrabazar, Dhanusha",name:"Mohan Kumar Danuwar",province:"Madhesh",phone:"9862547329",email:"birendrabazar@infinitylbsl.com.np"},
  {code:"030",branch:"Belauri, Kanchanpur",name:"Dinesh Chaudhary",province:"Sudurpaschim",phone:"9862547330",email:"belauri@infinitylbsl.com.np"},
  {code:"031",branch:"Kohalpur, Banke",name:"Bishnu Prasad Bhandari",province:"Lumbini",phone:"9862547331",email:"kohalpur@infinitylbsl.com.np"},
  {code:"032",branch:"Tribeni, Nawalpur",name:"Ramesh Chaudhary",province:"Gandaki",phone:"9862547332",email:"tribeni@infinitylbsl.com.np"},
  {code:"033",branch:"Shiwaruwa, Parsa",name:"Bimal Bhandari",province:"Madhesh",phone:"9862547333",email:"sibaruwa@infinitylbsl.com.np"},
  {code:"034",branch:"Simraungadh, Bara",name:"Chandan Prasad Chaurasiya",province:"Madhesh",phone:"9862547334",email:"simraungadh@infinitylbsl.com.np"},
  {code:"035",branch:"Shivanagar, Rautahat",name:"Roshan Chaudhary",province:"Madhesh",phone:"9862547335",email:"sibanagar@infinitylbsl.com.np"},
  {code:"036",branch:"Malangawa, Sarlahi",name:"Mukesh Lal Sahani",province:"Madhesh",phone:"9862547336",email:"malangawa@infinitylbsl.com.np"},
  {code:"037",branch:"Bishnupur, Siraha",name:"Anil Yadav",province:"Madhesh",phone:"9862547337",email:"bishnupura@infinitylbsl.com.np"},
  {code:"038",branch:"Urlabari, Morang",name:"Tank Nath Pokharel",province:"Koshi",phone:"9862547338",email:"urlabari@infinitylbsl.com.np"},
  {code:"039",branch:"Suryapura, Rupandehi",name:"Rajesh Yadav",province:"Lumbini",phone:"9862547339",email:"suryapura@infinitylbsl.com.np"},
  {code:"040",branch:"Shantibazar, Bardiya",name:"Rajendra Chaudhary",province:"Lumbini",phone:"9862547340",email:"shantibazar@infinitylbsl.com.np"},
  {code:"041",branch:"Sukhad, Kailali",name:"Dharmaraj Bhatta",province:"Sudurpaschim",phone:"9862547341",email:"sukhad@infinitylbsl.com.np"},
  {code:"042",branch:"Laxminiya, Dhanusha",name:"Dharmendra Kumar Yadav",province:"Madhesh",phone:"9862547342",email:"laxminiya@infinitylbsl.com.np"},
  {code:"043",branch:"Tanki Sinwari, Morang",name:"-------------------",province:"Koshi",phone:"9862547343",email:"tankisinwari@infinitylbsl.com.np"},
  {code:"044",branch:"Mahakali, Kanchanpur",name:"Ganesh Chaudhary",province:"Sudurpaschim",phone:"9862547344",email:"mahakali@infinitylbsl.com.np"},
  {code:"045",branch:"Chaumala, Kailali",name:"Padam Raj Chaulagain",province:"Sudurpaschim",phone:"9862547345",email:"chaumala@infinitylbsl.com.np"},
  {code:"046",branch:"Bhajani, Kailali",name:"Tapendra Prasad Khanal",province:"Sudurpaschim",phone:"9862547346",email:"bhajani@infinitylbsl.com.np"},
  {code:"047",branch:"Jeetpur, Kapilbastu",name:"Ramchandra Bhattarai",province:"Lumbini",phone:"9862547347",email:"jitpur@infinitylbsl.com.np"},
  {code:"048",branch:"Birendranagar, Surkhet",name:"Kishor Paudel",province:"Karnali",phone:"9862547348",email:"surkhet@infinitylbsl.com.np"},
  {code:"049",branch:"Madhuban, Bardiya",name:"Hans Bahadur Nepali",province:"Lumbini",phone:"9862547349",email:"madhuban@infinitylbsl.com.np"},
  {code:"050",branch:"Netachowk, Morang",name:"Hem Narayan Chaudhary",province:"Koshi",phone:"9862546350",email:"netachowk@infinitylbsl.com.np"},
  {code:"051",branch:"Dullu, Dailekh",name:"Laxman Shahi",province:"Karnali",phone:"9862546351",email:"dullu@infinitylbsl.com.np"},
  {code:"052",branch:"Chimdi, Sunsari",name:"Bhupendra Shahi",province:"Koshi",phone:"9862546352",email:"chimdi@infinitylbsl.com.np"},
  {code:"053",branch:"Mahuli, Saptari",name:"Subash Chandra Yadav",province:"Madhesh",phone:"9862546353",email:"mahuli@infinitylbsl.com.np"},
  {code:"054",branch:"Bariyarpatti, Siraha",name:"Jagdish Bhandari",province:"Madhesh",phone:"9862546354",email:"bariyarpatti@infinitylbsl.com.np"},
  {code:"055",branch:"Bagmati, Makwanpur",name:"Bhageshwori Chaudhary",province:"Bagmati",phone:"9862546355",email:"bagmati@infinitylbsl.com.np"},
  {code:"056",branch:"Bhimfedhi, Makwanpur",name:"Suman Karki",province:"Bagmati",phone:"9862546356",email:"bhimphedi@infinitylbsl.com.np"},
  {code:"057",branch:"Sisot, Sarlahi",name:"Rabindra Kumar Thakur",province:"Madhesh",phone:"9862546357",email:"sisot@infinitylbsl.com.np"},
  {code:"058",branch:"Sangrampur, Sarlahi",name:"Subhash Chandra Mishra",province:"Madhesh",phone:"9862546358",email:"sangrampur@infinitylbsl.com.np"},
  {code:"059",branch:"Sarpalo, Mahottari",name:"Devanand Chaudhary",province:"Madhesh",phone:"9862546359",email:"sarpalo@infinitylbsl.com.np"},
  {code:"060",branch:"Kapurkot, Salyan",name:"Kuldeep Sing Saud",province:"Karnali",phone:"9748306160",email:"kapurkot@infinitylbsl.com.np"},
  {code:"061",branch:"Bahuni, Morang",name:"Mohan Kumar Mahat Chhetri",province:"Koshi",phone:"9844207761",email:"bahuni@infinitylbsl.com.np"},
  {code:"062",branch:"Shreenagar, Salyan",name:"Bimal B.K.",province:"Karnali",phone:"9748306162",email:"shreenagar@infinitylbsl.com.np"},
  {code:"063",branch:"Tharmare, Salyan",name:"Laxmi Prasad Devkota",province:"Karnali",phone:"9748306163",email:"tharmare@infinitylbsl.com.np"},
  {code:"064",branch:"Khungri, Rolpa",name:"Geja Sharma Aryal",province:"Lumbini",phone:"9748306164",email:"khungri@infinitylbsl.com.np"},
  {code:"065",branch:"Pokhara, Kaski",name:"Athmaram Paudel",province:"Gandaki",phone:"9748306165",email:"pokhara@infinitylbsl.com.np"},
  {code:"066",branch:"Kusma, Parbat",name:"Rima Kumari Thapa",province:"Gandaki",phone:"9748306166",email:"kusma@infinitylbsl.com.np"},
  {code:"067",branch:"Bartung, Palpa",name:"Sagar Pandey",province:"Lumbini",phone:"9748306167",email:"bartung@infinitylbsl.com.np"},
  {code:"068",branch:"Rampur, Palpa",name:"Kamal Rajali",province:"Lumbini",phone:"9748306168",email:"rampur@infinitylbsl.com.np"},
  {code:"069",branch:"Bijuwar, Pyuthan",name:"Sita Acharya",province:"Lumbini",phone:"9748306169",email:"bijuwar@infinitylbsl.com.np"},
  {code:"070",branch:"Damauli, Tanahu",name:"Kabita Kunwar",province:"Gandaki",phone:"9748306170",email:"damauli@infinitylbsl.com.np"},
  {code:"071",branch:"Falebas, Parbat",name:"Rima Kumari Thapa",province:"Gandaki",phone:"9748306171",email:"falebas@infinitylbsl.com.np"},
 {code:"072",branch:"Wamistaksar,Gulmi",name:"--------",province:"Lumbini",phone:"9748306171",email:"falebas@infinitylbsl.com.np"},
 {code:"073",branch:"Bhanu,Tanahu",name:"---------",province:"Gandaki",phone:"9748306171",email:"falebas@infinitylbsl.com.np"},
  {code:"074",branch:"Duipiple, Lamjung",name:"Santosh Khadka",province:"Gandaki",phone:"9748306174",email:"duipiple@infinitylbsl.com.np"},
  {code:"075",branch:"Baletaksar, Gulmi",name:"Sudhan Gautam Kshetri",province:"Lumbini",phone:"9748306175",email:"baletaxar@infinitylbsl.com.np"},
  {code:"076",branch:"Tamghas, Gulmi",name:"Saraswati Khadka",province:"Lumbini",phone:"9748306176",email:"tamghas@infinitylbsl.com.np"},
  {code:"077",branch:"Shantipur, Gulmi",name:"Chanisara Sunari",province:"Lumbini",phone:"9748306177",email:"shantipur@infinitylbsl.com.np"},
  {code:"078",branch:"Hatiya, Baglung",name:"Samiksha Kc",province:"Gandaki",phone:"9748306178",email:"hatiya@infinitylbsl.com.np"},
  {code:"079",branch:"Burtibang, Baglung",name:"Krishna Kunwar",province:"Gandaki",phone:"9748306179",email:"burtibang@infinitylbsl.com.np"},
  {code:"080",branch:"Baglung, Baglung",name:"Chinta Mani Ban",province:"Gandaki",phone:"9748306180",email:"baglung@infinitylbsl.com.np"},
  {code:"081",branch:"Bhotewodar, Lamjung",name:"Beli Thapa",province:"Gandaki",phone:"9748306181",email:"bhotewoder@infinitylbsl.com.np"},
  {code:"082",branch:"Huwas, Parbat",name:"Srijana Khadka",province:"Gandaki",phone:"9748306182",email:"huwas@infinitylbsl.com.np"},
  {code:"083",branch:"Chahara, Palpa",name:"Kamal Bahadur Paudel",province:"Lumbini",phone:"9748306183",email:"chahara@infinitylbsl.com.np"},
  {code:"084",branch:"Dumartoka, Sunsari",name:"Dipak Prasad Devkota",province:"Koshi",phone:"9862547301",email:"dumartoka@infinitylbsl.com.np"},
  {code:"085",branch:"Dhikure, Nuwakot",name:"Samjhana Bogati",province:"Bagmati",phone:"9844207712",email:"dhikure@infinitylbsl.com.np"},
  {code:"086",branch:"Suryodaya, Illam",name:"Khadga Bahadur Shrestha",province:"Koshi",phone:"9745358702",email:"suryodaya@infinitylbsl.com.np"},
  {code:"087",branch:"Jahare, Surkhet",name:"Indra Bahadur Bhandari",province:"Karnali",phone:"9745358703",email:"Jahare@infinitylbsl.com.np"},
  {code:"088",branch:"Budhar, Doti",name:"Suman Chaudhary",province:"Sudurpaschim",phone:"9745358704",email:"budhar@infinitylbsl.com.np"},
  {code:"089",branch:"Lamkichuha, Kailali",name:"Sanjita Kumari Chaudhary",province:"Sudurpaschim",phone:"9745358706",email:"lamkichuha@infinitylbsl.com.np"},
  {code:"090",branch:"Beldandi, Kanchanpur",name:"Sanjib Chaudhary",province:"Sudurpaschim",phone:"9745358707",email:"beldandi@infinitylbsl.com.np"},
  {code:"091",branch:"Kailari, Kailali",name:"Bishnu Prasad Jaishi",province:"Sudurpaschim",phone:"9745358709",email:"kailari@infinitylbsl.com.np"},
  {code:"092",branch:"Dakaha, Sindhuli",name:"Priyanka Kumari Roy",province:"Bagmati",phone:"9745358705",email:"dakaha@infinitylbsl.com.np"},
  {code:"093",branch:"Baddichaur, Surkhet",name:"Jeeban Bhandari",province:"Karnali",phone:"9745358701",email:"baddichaur@infinitylbsl.com.np"},
  {code:"094",branch:"Kamdi, Banke",name:"Amitri Chaudhary",province:"Lumbini",phone:"9761621499",email:"kamdi@infinitylbsl.com.np"},
  {code:"095",branch:"Nijgadh, Bara",name:"Khushi Ram Yadav",province:"Madhesh",phone:"9745358710",email:"nijgadh@infinitylbsl.com.np"},
  {code:"096",branch:"Sijuwa, Morang",name:"Rojina Dhimal",province:"Koshi",phone:"9761621492",email:"sijuwa@infinitylbsl.com.np"},
  {code:"097",branch:"Bhachek, Gorkha",name:"Sandhya Chaudhary",province:"Gandaki",phone:"9748203366",email:"bhachhek@infinitylbsl.com.np"},
  {code:"098",branch:"Mathagadhi, Palpa",name:"Dipesh Khamcha",province:"Lumbini",phone:"9748203198",email:"mathagadhi@infinitylbsl.com.np"},
  {code:"099",branch:"Taksera, Eastern Rukum",name:"Tulsiram Bohora",province:"Lumbini",phone:"9748203199",email:"taksera@infinitylbsl.com.np"},
  {code:"100",branch:"Gurans, Dailekh",name:"Nardev Joshi",province:"Karnali",phone:"9748203740",email:"gurans@infinitylbsl.com.np"},
  {code:"101",branch:"Palata, Kalikot",name:"Jaigad B.K",province:"Karnali",phone:"9748203741",email:"palata@infinitylbsl.com.np"}
];

const Branches = () => {
  // 1. Set default to "All"
  const [selectedProvince, setSelectedProvince] = useState("All");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  // 2. Add "All" to the beginning of the provinces list
  const provinces = ["All", ...new Set(branches.map(b => b.province))];

  // 3. Updated logic to handle "All" selection
  const filteredData = branches.filter(b => {
    const matchesProvince = selectedProvince === "All" || b.province === selectedProvince;
    const matchesBranch = selectedBranch === "" || b.branch === selectedBranch;
    return matchesProvince && matchesBranch;
  });

  // Reset to page 1 whenever filters change to avoid blank pages
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProvince, selectedBranch]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="branch-container">
      <div className="title">🏢 Branch Network</div>

      <div className="controls">
        {/* Province Dropdown */}
        <div className="dropdown-wrapper">
          <label htmlFor="province-select">Select Province: </label>
          <select 
            id="province-select"
            className="select-box"
            value={selectedProvince}
            onChange={(e) => {
              setSelectedProvince(e.target.value);
              setSelectedBranch(""); // Reset branch selection
            }}
          >
            {provinces.map(prov => (
              <option key={prov} value={prov}>{prov}</option>
            ))}
          </select>
        </div>

        {/* Branch Dropdown */}
        <div className="dropdown-wrapper">
          <label htmlFor="branch-select">Select Specific Branch: </label>
          <select 
            id="branch-select"
            className="select-box"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">-- All Branches in {selectedProvince === "All" ? "Nepal" : selectedProvince} --</option>
            {branches
              .filter(b => selectedProvince === "All" || b.province === selectedProvince)
              .map(b => (
                <option key={b.code} value={b.branch}>{b.branch}</option>
              ))
            }
          </select>
        </div>
      </div>

      {/* Show total count for "All" view */}
      <div className="results-count">
        Showing {filteredData.length} branches {selectedProvince !== "All" && `in ${selectedProvince}`}
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>🏷 Code</th>
              <th>📍 Branch</th>
              <th>👤 Manager</th>
              <th>🌍 Province</th>
              <th>📞 Contact</th>
              <th>✉ Email</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((b, i) => (
                <tr key={i}>
                  <td>{b.code}</td>
                  <td>{b.branch}</td>
                  <td>{b.name}</td>
                  <td>
                    <span className="badge">{b.province}</span>
                  </td>
                  <td>
                    <a href={`tel:${b.phone}`} className="contact-link">📞 {b.phone}</a>
                  </td>
                  <td>
                    <a href={`mailto:${b.email}`} className="email-link">✉ {b.email}</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">No branches found in this selection.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button 
              key={i + 1} 
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Branches;