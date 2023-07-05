interface Config {
  url: string,
  debug: false
}

export class http {

  /**
   * Debug mode.
   */
  isDebug: boolean = false

  /**
   * Project address.
   */
  url: string = "https://www.badiu.com/"

  /**
   * Configure http.
   * 
   * @returns http
   */
  public set(config: Config): http {
    this.url     = config.url

    this.isDebug = config.debug
    
    return this;
  }

  /**
   * Get all images in switch components under.
   */
  public getSwitchImgs(): number {
    return 1;
    uni.request({
      url: 'https://www.baidu.com/'
    })
  }

}