# Chord Kata

**tl;dr;**
  
    The purpose of this kata is to create an application which can determine the notes for a music chord based on its notation.

    For instance, when asked for a C major chord, it should return the following note : C, E and G.


**Longer version**

Before we start, it's important the precise that we will work on a **diatonic scale**, which is fairly common in the western music scales.

This musical scale is base on 7 notes : C - D - E - F - G - A - B

Each note is separated by two **halftones** (two halftones equals a tone) except between E and F, and B and A where there is only one halftone.

## Step One - Determine the related notes

For each note of the scale, we can determine related notes that will help us to build a chord. Thoses notes are called third, fifth, sixth, seventh.

| Root | 3rd (+4 halftones)    | 5th (+3 halftones)    |
|------|--------|---------|
|  C   |  E     |  G      |
|  D   |  F#/Gb |  A      |
|  E   |  G#/Ab |  B      |
|  F   |  A     |  C      |
|  G   |  B     |  D      |
|  A   |  C#/Db |  E      |
|  B   |  D#/Eb |  F#/Gb  |


Tierce => Majeur (2 tons) / Mineur (1.5 ton)

Full table : 
| Root | 2        | 3       | 4      | 3rd    | 6       | 7       | 8       | 9       | 10      | 11      | 12
|------|----------|---------|--------|--------|---------|---------|---------|---------|---------|---------|---------|
|  C   |  C#/Db   |  D      |  D#/Eb |  E     |  F      |  F#/Gb  |  G      |  G#/Ab  |  A      |  A#/Bb  |  B
|  D   |  D#/Eb   |  E      |  F     |  F#/Gb |  G      |  G#/Ab  |  A      |  A#/Bb  |  B      |  C      |  C#/Db
|  E   |  F       |  F#/Gb  |  G     |  G#/Ab |  A      |  A#/Bb  |  B      |  C      |  C#/Db  |  D      |  D#/Eb
|  F   |  F#/Gb   |  G      |  G#/Ab |  A     |  A#/Bb  |  B      |  C      |  C#/Db  |  D      |  D#/Eb  |  E
|  G   |  G#/Ab   |  A      |  A#/Bb |  B     |  C      |  C#/Db  |  D      |  D#/Eb  |  E      |  F      |  F#/Gb
|  A   |  A#/Bb   |  B      |  C     |  C#/Db |  D      |  D#/Eb  |  E      |  F      |  F#/Gb  |  G      |  G#/Ab
|  B   |  C       |  C#/Db  |  D     |  D#/Eb |  E      |  F      |  F#/Gb  |  G      |  G#/Ab  |  A      |  A#/Bb

## Step Two - Compose major and minor chords

## Step Three - Inverted chords

## Step Four - Make the music easier