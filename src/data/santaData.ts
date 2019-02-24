import { HttpHeaders } from '@angular/common/http';

const moesifHeader:string = "X-Moesif-Application-Id: eyJhcHAiOiI0OTM6OTMiLCJ2ZXIiOiIyLjAiLCJvcmciOiI2OTA6ODEiLCJpYXQiOjE1NTA5NjY0MDB9.yiAHVYJiJlil7DbXoqm2ms1N4pMRkPYJI851Bh0Vbq0"

export const santaData = {
    url: "https://https-just--rest-herokuapp-com-3.moesif.net/eyJhcHAiOiI0OTM6OTMiLCJ2ZXIiOiIyLjAiLCJvcmciOiI2OTA6ODEiLCJpYXQiOjE1NTA5NjY0MDB9.yiAHVYJiJlil7DbXoqm2ms1N4pMRkPYJI851Bh0Vbq0/subjects",
    headers: new HttpHeaders({moesifHeader})
  }