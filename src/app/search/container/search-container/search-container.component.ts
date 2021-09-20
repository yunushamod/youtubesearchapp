import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/search.interface';
import { SearchService } from 'src/app/shared/services/search.service';
@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  inputTouched = false;
  loading = false;
  videos: Video[] = [];

  constructor(private searchService: SearchService) { 
  }
  handleSearch(inputValue: string){
    this.loading = true;
    this.searchService.getVideos(inputValue)
    .subscribe((items)=>{
      this.videos = (items).map((item: { snippet: { title: any; channelId: any; channelTitle: any; description: any; publishedAt: string | number | Date; thumbnails: { high: { url: any; }; }; }; id: { videoId: any; }; })=>{
        return {
          title: item.snippet.title,
          videoId: item.id.videoId,
          videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          channelId: item.snippet.channelId,
          channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
          channelTitle: item.snippet.channelTitle,
          description: item.snippet.description,
          publishedAt: new Date(item.snippet.publishedAt),
          thumbnail: item.snippet.thumbnails.high.url
        };
      });
      this.inputTouched = true;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
