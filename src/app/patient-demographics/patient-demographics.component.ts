import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css']
})
export class PatientDemographicsComponent implements OnInit {
  public demographics: string;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getLoadedPatient();
  }


  public getLoadedPatient() {
    this.patientService.getloadepatient().subscribe(
      (data) => {
        this.demographics = data;
      }
    );

  }


}
