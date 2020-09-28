class AssetImage {
  constructor(private light?: any, private dark?: any) {}
  getImage(theme: string = "light"): any | undefined {
    if (theme == "light") {
      return this.light ?? this.dark;
    }
    return this.dark ?? this.light;
  }
}

export const icons = {
  progress: new AssetImage(
    require("./images/icons/progress/progress_icon_light.png"),
    require("./images/icons/progress/progress_icon_dark.png")
  ),
  adjusts: new AssetImage(
    require("./images/icons/adjusts/adjusts_icon_light.png"),
    require("./images/icons/adjusts/adjusts_icon_dark.png")
  ),
  about: new AssetImage(
    require("./images/icons/about/about_icon_light.png"),
    require("./images/icons/about/about_icon_dark.png")
  ),
};
