
PNGPaletteOrder
================

This is a small steganographic tool written in javascript to hide information in the pallet order of a PNG file.

_Steganography_ is the practice of concealing a file, message, image, or video within another file, message, image, or video.

Where are those data hidden ?
-----------------------------
The data are store into the palette of a PNG file. The picture is not modified, only the order of the color within the palette is slightly modify in order to keep our secret message. The compression or size of the file won't be change at all. 

A viewer won't be able to know what are the change. Of course, someone with the program will be able to retreave the secret message. And someone looking at the right place might notice that the order of the color within the palette is unusual (at least not sorted).

What do the program do ?
------------------------
There are two basic function for the program. One is to generate a graphic file where there is an hidden message and the other is to retrieve the message witch is incorporated into the graphic file.

Because there is absolutely no secret within the method we use, anybody can retrieve the message if he have the program/knowledge.

It is possible to retrieve something from a graphic file where nothing have been hidden. Of course, this thing won't be anything intelligent. It's up to the person extracting the message to figure out if this is a message or just some trash.

If you have something to hide and want to protect your message, then you better have to send an encrypted hidden message and make sure your encryption program put as few structure as possible into the encrypted message so that it will be difficult to recognize that this is an encrypted message.

If you want to compress your message, make sure this is the first operation you do, then only encrypt and finally hide the result into a graphic file. Because encryption introduce confusion within your data, it will be very hard to compress after.

As a matter of fact, a steganographic technique should also provide a build in encryption algorithm so that the knowledge of the technique is not the only secret (as for security by obscurity).

Test
----

You can test it here : http://www.barzin.be/PGPaletteOrdre

References
----------

UPNG - A small, fast and advanced PNG / APNG encoder and decoder.
https://github.com/photopea/UPNG.js

JSBN - a fast, portable implementation of large-number math in pure JavaScript,
https://github.com/andyperlitch/jsbn#readme


