import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainviewComponent } from './modules/mainview/mainview.component';
import { MainVideoComponent } from './modules/mainvideo/mainvideo.component';
import { DownloadComponent } from './modules/download/download.component';


const routes: Routes = [
    {
        path: 'download',
        component: DownloadComponent,
    },
    {
        path: '',
        redirectTo: 'scb/automotive',
        pathMatch: 'full'
    },
    {
        path: 'scb/automotive',
        component: MainviewComponent,
        data: {
            path: 'scb/automotive',
            length: 6,
            title: 'Automotive Range',
            id: 111
        }
    },
    {
        path: 'scb/dual-purpose',
        component: MainviewComponent,
        data: {
            path: 'scb/dual-purpose',
            length: 4,
            title: 'Dual Purpose Range',
            id: 112
        }
    },
    {
        path: 'scb/golf-cart',
        component: MainviewComponent,
        data: {
            path: 'scb/golf-cart',
            length: 4,
            title: 'Golf Cart Range',
            id: 113
        }
    },
    {
        path: 'scb/lawncare',
        component: MainviewComponent,
        data: {
            path: 'scb/lawncare',
            length: 4,
            title: 'Lawncare Range',
            id: 114
        }
    },
    {
        path: 'scb/marine',
        component: MainviewComponent,
        data: {
            path: 'scb/marine',
            length: 4,
            title: 'Marine Range',
            id: 115
        }
    },
    {
        path: 'scb/start-stop',
        component: MainviewComponent,
        data: {
            path: 'scb/start-stop',
            length: 4,
            title: 'Start-Stop Range',
            id: 116
        }
    },
    {
        path: 'scb/truck',
        component: MainviewComponent,
        data: {
            path: 'scb/truck',
            length: 6,
            title: 'Truck Range',
            id: 117
        }
    },
    {
        path: 'scb/gladiator',
        component: MainviewComponent,
        data: {
            path: 'scb/gladiator',
            length: 4,
            title: 'Gladiator Range',
            id: 118
        }
    },
    {
        path: 'scb/amp-tech-flooded-deep-cycle',
        component: MainviewComponent,
        data: {
            path: 'scb/amp-tech-flooded-deep-cycle',
            length: 4,
            title: 'AMP-Tech Flooded Deep Cycle Range',
            id: 119
        }
    },

    {
        path: 'exide/evolution-start-stop',
        component: MainviewComponent,
        data: {
            path: 'exide/evolution-start-stop',
            length: 4,
            title: 'Evolution Start-Stop Range',
            id: 211
        }
    },
    {
        path: 'exide/heavy-commercial',
        component: MainviewComponent,
        data: {
            path: 'exide/heavy-commercial',
            length: 4,
            title: 'Heavy Commercial Range',
            id: 212
        }
    },
    {
        path: 'exide/industrial-cycling',
        component: MainviewComponent,
        data: {
            path: 'exide/industrial-cycling',
            length: 4,
            title: 'Industrial Cycling Range',
            id: 213
        }
    },
    {
        path: 'exide/marine-stowaway',
        component: MainviewComponent,
        data: {
            path: 'exide/marine-stowaway',
            length: 4,
            title: 'Marine Stowaway Range',
            id: 214
        }
    },
    {
        path: 'exide/passenger',
        component: MainviewComponent,
        data: {
            path: 'exide/passenger',
            length: 4,
            title: 'Passenger',
            id: 215
        }
    },
    {
        path: 'exide/powerider',
        component: MainviewComponent,
        data: {
            path: 'exide/powerider',
            length: 4,
            title: 'Powerider',
            id: 216
        }
    },
    {
        path: 'exide/suv-4wd-light',
        component: MainviewComponent,
        data: {
            path: 'exide/suv-4wd-light',
            length: 4,
            title: 'SUV 4WD Light Range',
            id: 217
        }
    },

    {
        path: 'alco/automotive',
        component: MainviewComponent,
        data: {
            path: 'alco/automotive',
            length: 4,
            title: 'Automotive Range',
            id: 311
        }
    },
    {
        path: 'alco/automotive-alco3000',
        component: MainviewComponent,
        data: {
            path: 'alco/automotive-alco3000',
            length: 2,
            title: 'Automotive Alco 3000 Range',
            id: 312
        }
    },
    {
        path: 'alco/dual-purpose',
        component: MainviewComponent,
        data: {
            path: 'alco/dual-purpose',
            length: 4,
            title: 'Dual Purpose Range',
            id: 313
        }
    },
    {
        path: 'alco/lawn-mower',
        component: MainviewComponent,
        data: {
            path: 'alco/lawn-mower',
            length: 4,
            title: 'Lawn Mower Range',
            id: 314
        }
    },
    {
        path: 'alco/marine',
        component: MainviewComponent,
        data: {
            path: 'alco/marine',
            length: 4,
            title: 'Marine Range',
            id: 315
        }
    },
    {
        path: 'alco/start-stop',
        component: MainviewComponent,
        data: {
            path: 'alco/start-stop',
            length: 4,
            title: 'Start-Stop Range',
            id: 316
        }
    },
    {
        path: 'alco/truck',
        component: MainviewComponent,
        data: {
            path: 'alco/truck',
            length: 4,
            title: 'Truck Range',
            id: 317
        }
    },

    // videos scb
    {
        path: 'videos/scb/m1',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M1+R5+fix+2+iPad.mp4',
            title: 'SCB Module 1',
            id: 121
        }
    },
    {
        path: 'videos/scb/m2',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M2+-+iPad+VERSION.mp4',
            title: 'SCB Module 2',
            id: 122
        }
    },
    {
        path: 'videos/scb/m3',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M3+-+iPad+VERSION.mp4',
            title: 'SCB Module 3',
            id: 123
        }
    },
    {
        path: 'videos/scb/m4',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M4+-+iPad+VERSION.mp4',
            title: 'SCB Module 4',
            id: 124
        }
    },
    {
        path: 'videos/scb/m5',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M5+-+iPad+VERSION.mp4',
            title: 'SCB Module 5',
            id: 125
        }
    },
    {
        path: 'videos/scb/m6',
        component: MainVideoComponent,
        data: {
            path: 'videos/scb',
            filename: 'Supercharge+M6+R5+fix+iPad.mp4',
            title: 'SCB Module 6',
            id: 126
        }
    },

    // exide videos

    {
        path: 'videos/exide/m1',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+A+-+What+is+a+Battery+FOR+EXPORT-SD.mp4',
            title: 'Exide Module A',
            id: 221
        }
    },
    {
        path: 'videos/exide/m2',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+B+-+Testing+a+Battery-SD.mp4',
            title: 'Exide Module B',
            id: 222
        }
    },
    {
        path: 'videos/exide/m3',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+C+-+How+to+test+a+Battery+using+an+electronic+tester.mp4',
            title: 'Exide Module C',
            id: 223
        }
    },
    {
        path: 'videos/exide/m4',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+D+-+Testing+using+a+hydrometer+&+multimeter+FOR+EXPORT.mp4',
            title: 'Exide Module D',
            id: 224
        }
    },
    {
        path: 'videos/exide/m5',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+D1+-+How+to+Test+a+battery+(Using+a+Hyrdrometer).mp4',
            title: 'Exide Module D1',
            id: 225
        }
    },
    {
        path: 'videos/exide/m6',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+D2+-+Testing+a+vehicles+electrics+(using+a+multimeter).mp4',
            title: 'Exide Module D2',
            id: 226
        }
    },
    {
        path: 'videos/exide/m7',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+E+-+How+to+charge+a+Battery+FOR+EXPORT-SD.mp4',
            title: 'Exide Module E',
            id: 227
        }
    },
    {
        path: 'videos/exide/m8',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+F+-+How+to+Install+a+Battery.mp4',
            title: 'Exide Module F',
            id: 228
        }
    },
    {
        path: 'videos/exide/m9',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+G+-+Managing+Warranty.mp4',
            title: 'Exide Module G',
            id: 229
        }
    },
    {
        path: 'videos/exide/m10',
        component: MainVideoComponent,
        data: {
            path: 'videos/exide',
            filename: 'Module+H-SD.mp4',
            title: 'Exide Module H',
            id: 2210
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
