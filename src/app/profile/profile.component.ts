import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile_id: string | null | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.profile_id = this.route.snapshot.paramMap.get('profile_id');
  }
}
