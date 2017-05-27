<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template match="/">
      <html>
         <head>
            <link rel="stylesheet" type="text/css" href="../style/style_gallery.css" />
         </head>
         <body>
            <xsl:for-each select="gallery/image">
               <a onclick="parent.openBox({@id},'{//@name}')">
                  <img src="{@file-tn}" class="gallery_image" />
               </a>
            </xsl:for-each>
         </body>
      </html>
   </xsl:template>
</xsl:stylesheet>