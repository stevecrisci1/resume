private async void DownloadLists_Click(object sender, RoutedEventArgs e) {
    List<String> listsTitles = new List<string>();
    HttpClientHandler handler = new HttpClientHandler();
    handler.UseDefaultCredentials = true;
    HttpClient client = new HttpClient(handler);
    client.DefaultRequestHeaders.Add("Accept", "application/json;odata=verbose");
    HttpResponseMessage response = await client.GetAsync(
        "http://devbook.sp2013.local/_api/web/lists");

    String jsonString = await response.Content.ReadAsStringAsync();
    JsonObject o = JsonObject.Parse(jsonString);
    foreach (var i in o.FirstOrDefault().Value.GetObject()
        .FirstOrDefault().Value.GetArray()) {
        JsonObject item = i.GetObject();
        if (!item["Hidden"].GetBoolean())
            listsTitles.Add(item["Title"].GetString());
    }
    this.ListOfLists.ItemsSource = listsTitles;
}