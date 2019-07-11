<template>
    <div ref="redoc" id="redoc_container" class="redoc-container anchored"/>
</template>

<script>
  export default {
    mounted() {
      let redocJs = document.createElement('script')
      let redocInner = document.createTextNode(`
        Redoc.init(
        '/openapi/node-rpc-api.yaml',{
          scrollYOffset: 59,
          "unstable_ignoreMimeParameters": true,
          "layout": {
            "scope": "section"
          },
          "theme": {
            "typography": {
              "fontFamily": "'museo-sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              "fontSize": "16px",
              "lineHeight": "1.5em",
              "fieldName": {
                "color": "#263238",
                "fontWeight": 300
              },
              "heading1": {
                "color": "#687c8c",
                "fontSize": "1.8em",
                "fontWeight": 100,
                "transform": "uppercase",
                "fontFamily": "'brandon-grotesque', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              },
              "heading2": {
                "color": "#687c8c",
                "fontSize": "1.6em",
                "fontWeight": 500,
                "transform": "none",
                "fontFamily": "'brandon-grotesque', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              },
              "heading3": {
                "color": "#687c8c",
                "fontSize": "1.3em",
                "fontWeight": 500,
                "transform": "none",
                "fontFamily": "'brandon-grotesque', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              },
              "rightPanelHeading": {
                "color": "#9fb1bf",
                "fontSize": "0.9em",
                "fontWeight": 500,
                "transform": "uppercase",
                "fontFamily": "'brandon-grotesque', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              },
              "code": {
                "color": "#C05F68",
                "backgroundColor": "#f4f7fa",
                "tokens": {
                  "function": {
                    "color": "#d2e2e7"
                  },
                  "punctuation": {
                    "color": "#9fb1bf"
                  },
                  "property.string": {
                    "color": "#e9ebee"
                  },
                  "string": {
                    "color": "#acdcd3"
                  },
                  "number": {
                    "color": "#6c96a1"
                  },
                  "boolean": {
                    "color": "#c05f68"
                  },
                  "class-name": {
                    "color": "#e9ebee"
                  },
                  "keyword": {
                    "color": "#dca4a4"
                  },
                  "operator": {
                    "color": "#ffffff"
                  }
                }
              },
              "links": {
                "color": "#6ec5ab",
                "hover": "#5ea58e",
                "visited": "#6ec5ab"
              }
            },
            "colors": {
              "primary": {
                "main": "#687c8c"
              },
              "success": {
                "main": "#6ec5ab"
              },
              "error": {
                "main": "#c05f68"
              },
              "text": {
                "primary": "#687c8c",
                "secondary": "#a9B4bf"
              },
              "http": {
                "get": "#6ec5ab",
                "put": "#a9b4bf",
                "post": "#6c96a1",
                "delete": "#c05f68"
              }
            },
            "menu": {
              "level1Items": {
                "textTransform": "capitalize"
              },
              "arrow": {
                "color": "#ccc",
                "size": "18px"
              }
            },
            "schema": {
              "nestedBackground": "#f2f2f2",
              "constraints": {
                "color": "#6c96a1",
                "backgroundColor": "#d2e2e7"
              },
              "arrow": {
                "color": "#687c8c",
                "size": "1em"
              }
            },
            "rightPanel": {
              "backgroundColor": "#3c3c3c",
              "textColor": "#fff"
            },
            "overrides": {
              "DownloadButton": {
                "custom": "padding: 5px 15px; border-radius: 4px; color: #fff !important; background-color: #6ec5ab; border-color: transparent; &:hover {background-color: #5ea58e !important;}"
              },
              "NextSectionButton": {
                "custom": "padding: 5px 15px; border-radius: 4px; color: #fff !important; background-color: #6ec5ab; border-color: transparent; &:hover {background-color: #5ea58e !important;}"
              }
            }
          }
        },
        document.querySelector('#redoc_container'),
      );
      `);

      redocJs.appendChild(redocInner)
      this.$refs.redoc.appendChild(redocJs)
    }
  }
</script>

<style lang="stylus">
    #redoc_container .redoc-wrap
        margin-top 59px !important

    .redoc-page-class .page > div
        max-width none !important
        margin: 0 !important
        padding 0px 0 0 0 !important

    .redoc-page-class .page > div > div
        margin-top 0 !important

    #redoc_container {
        line-height: auto;
        font-weight: 300;
        font-family: "museo-sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    #redoc_container p,
    #redoc_container li,
    #redoc_container span {
        /*  font-size: unset;
          line-height: unset;*/
    }

    .redoc-wrap h1, .redoc-wrap h3, .redoc-wrap h4, .redoc-wrap h5, .redoc-wrap h6 {
        /*color: inherit !important;*/
        font-family: "brandon-grotesque", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .redoc-wrap img {
        cursor: pointer;
    }

    #redoc_container .redoc-markdown pre {
        font-family: Courier, monospace;
        white-space: pre-wrap;
        background-color: #263238;
        color: white;
        overflow-x: auto;
        line-height: normal;
        padding: 12px 14px 15px;
        border-radius: 0px;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(38, 50, 56, 0.1);
    }

    .eEGMec pre {
        display: block;
        padding: 20px;
        margin: 0 0;
        font-size: 13px;
        line-height: normal;
        word-break: break-all;
        word-wrap: break-word;
        color: #fff;
        background-color: transparent;
        border: none;
        border-radius: 0;
    }

    .jIrRTk div,
    .jIrRTk span {
        line-height: 1.2em;
    }

    .scrollbar-container .sc-kPVwWT span {
        line-height: 1.3em;
    }

    #redoc_container label {
        /*font-weight: unset;*/
        font-family: "museo-sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    #redoc_container table
        display table
    #redoc_container table th
    #redoc_container table td
        border none
    #redoc_container table,
    #redoc_container table th,
    #redoc_container table td,
    #redoc_container table tr,
    #redoc_container table span {
        font-family: "museo-sans", 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

</style>
