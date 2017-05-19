<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
      <html>
                <head>
                  <link rel="stylesheet" type="text/css" href="../style/style_gallery.css" />
                </head>
                <body>
          	   	<xsl:for-each select="gallery/image">
          	   	   <a href=""><img src="{@file-tn}" class="gallery_image" /></a>
          	   	</xsl:for-each>
               </body>
               </html>
    </xsl:template>
</xsl:stylesheet>
