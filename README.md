# Web-based tool for Image and Graph Analysis using Sonification

In this work, we present an interactive web application developed for the blind students
studying in schools which help them to grasp useful information from various images and graphs. From the images, the user will
be able to comprehend the various kinds of everyday objects present in the image and the colours of various parts of the
image. From 2D graphs, the user will also be able to trace the plot and have an idea about the position of special points
present in the graph. The interaction of the user with the system would be touch-based and the output would be in the form of
sound which can be either speech or non-speech depending on the various modes of analysis.

## 1. Image Analysis

The various stages involved in the Image Analysis module
are as follows.

### \* Image Upload:

First, an image is uploaded to the webapplication
from the local system. The image can be of any
type having a suitable resolution. The teacher or guide of the
visually-impaired user performs this step.

### \* Image Preprocessing:

After uploading the image, it is
processed to bring it to a suitable size. After that it is put
through an Object Detection model which detects all the
common objects present in the image along with their labels
and positions. As seen in Fig.2, the tool shows the objects
detected in the image along with every object’s confidence
score. When the preprocessing stage is over, the tool is ready
for the user to analyze the information extracted from the
uploaded image. There are two kinds of analysis modes present
in the tool which are discussed in the following sections.

### \* Object Analysis:

In the Object analysis mode, the image
is shown on the screen with the objects named and bound
by rectangles. The object names or labels and
positions are achieved from the object detection step of the
preprocessing stage. When the visually-impaired user takes
the pointer inside one of these rectangles, a speech prompt
would be generated over the auditory output that will inform
the user the class of the object present in the image at that
current pointer location.

### \* Colour Analysis:

In the Colour analysis mode, the
original image is shown on the screen. When the user clicks or
taps anywhere on the image, a speech prompt is played through
the auditory output. This prompt tells the user the colour of
the pixel at the position of the pointer. The tool detects the
RGB values of the focused pixel, converts it into hexadecimal
colour and then classifies it into one of many human-readable
colours of the CIELAB colour space using the Delta-E colour
difference technique. Finally, it plays the speech prompt that
corresponds with that colour.

## 2. Graph Analysis

The various stages involved in the Graph Analysis module
are as follows.

### \* 2D Function Input:

At this stage, a 2-D function is
provided as input for plotting the graph that is to be analyzed.
As of now, the tool supports only polynomial functions with
Fig. 3. Image Analysis Implementation
a maximum degree of 2. Future improvements can increase
the analysis range of the tool to a wider variety of functions.
The teacher or guide of the user enters the coefficient of every
term present in the expression, along with the names of the X
and Y parameters.

### \* Graph Plotting:

The tool creates the data points for the
given 2-D function and then plots the graph. This graph is
shown on the screen along with a speech prompt
that tells the X and Y parameters and also the type of graph
presented. The user can now start the analysis of the graph.

### \* Plot Tracing:

As the visually-impaired user interacts
with the screen, a sound prompt indicates the proximity of
the interaction point from the actual plot. This audio helps the
user to navigate the pointer to the plot and then trace over
it. As the user traces the graph with the pointer, a continuous
sound guides him/her through the screen.

### \* Special Point Detection:

A different sound is played
whenever the user comes across any special point in the plot
such as maxima, minima etc.
