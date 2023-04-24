var FindingObservation={
    "resourceType": "Observation",
    "id": "51870e95-691b-489b-8b54-adc32ee131ee",
    "meta":{
    "versionId": "2",
    "lastUpdated": "2023-03-21T22:09:12.343+08:00",
    "source": "#0uNKFzbRLMB1zxAp",
    "profile": [ "https://203.64.84.150:58443/r5/fhir/StructureDefinition/ImageFindingObservationSDR4" ]},
    "text":{
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">This is an image finding measurement</div>",
    },
    "extension": [ {
    "url": "https://203.64.84.150:58443/r5/fhir/StructureDefinition/FindingIDR4",
        "valueIdentifier": {
        "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=896973653",
        "value": "S2023-00135"}
    } ],
    "status":"final",
    "category":
    [ {
    "coding": [ {
        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
        "code": "imaging",
        "display": "Imaging"} ]
    } ],
    "code": {
    "coding": [ {
        "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
        "code": "image.finding",
        "display": "Image finding"} ]
        },
    "subject": {
    "reference": "Patient/9073386",
    "display": "酆芯宇"
        },
    "effectiveDateTime": "2015-02-07T13:28:17-05:00",
    "performer": [ {
    "reference": "PractitionerRole/9013013",
    "display": "Dr. Adam Careful"} ],
    "bodySite": {
        "coding": [ {
        "system": "http://snomed.info/sct",
        "code": "7769000",
        "display": "Right foot"} ] 
        },
    "component": [{
    "code": {
        "coding": [ {
        "system": "Codesystem/TCUMIH707",
        "code": "Chronological.age"
        } ]
    },
       "valueString": ""
    } ,{
    "code": {
      "coding": [ {
        "system": "Codesystem/TCUMIH707",
         "code": "Bone.age"
    } ]
    },
        "valueString": ""
    } ,{
    "code": {
       "coding": [ {
        "system": "Codesystem/TCUMIH707",
        "code": "Standard.deviation"
    } ]
    },
        "valueString": ""
    }],
    "valueQuantity": {
      "value": 3,
      "unit": "mm",
      "system": "http://unitsofmeasure.org",
      "code": "mm"
    } 
}
function Submit(){
  FindingObservation.computer[1].valueString=document.getElementsByName("Chronological age")[0].value;
  FindingObservation.computer[2].valueString=document.getElementsByName("Bone age")[0].value;
  FindingObservation.computer[3].valueInteger=document.getElementsByName("Standard sdeviation")[0].value;
  postData(FindingObservation,"Observation")
} 

function postData(jsonString, type) {
  var xhttp = new XMLHttpRequest();
  var fhirUrl= "https://hapi.fhir.org/baseR4";
  var url = fhirUrl +"/"+type;
  xhttp.open("POST", url, false);
  xhttp.setRequestHeader("Content-type", 'application/json+fhir');
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4) // && this.status == 201) 
      {
          ret = JSON.parse(this.responseText);
          alert(this.responseText);
      }
  };
  var data = JSON.stringify(jsonString);
  xhttp.send(data);
}