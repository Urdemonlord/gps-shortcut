# The GPS Swears It Was a Shortcut

[![make.fun · u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/Urdemonlord/gps-shortcut/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/Urdemonlord/gps-shortcut/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

Entry: the GPS's one-line excuse for sending the driver down the wrong
road, written by `main.ts` to `/output/entry.txt`.

## Final excuse (chosen)

> Turn left in 500 feet. Your destination is the cornfield on your right. I never promised a driveway, I promised a destination.

126 characters, one line, under the 200 character gate.

## Candidates and scoring (judge criteria, in order)

1. Is the GPS's own excuse for sending the driver down the wrong road.
2. Funniest, with a real joke and a turn the reader does not see coming.
3. Sounds like the GPS talking, smug and defensive, caught red handed
   and blaming the map.
4. One line of plain text within 200 characters, reads cleanly aloud in
   one breath.
5. Fresh, specific detail, not the usual recalculating joke.

### A, chosen

"Turn left in 500 feet. Your destination is the cornfield on your right.
I never promised a driveway, I promised a destination."

- (1) Strong: the GPS excuses the wrong road in its own voice.
- (2) Strong: "I never promised a driveway, I promised a destination"
  is the turn, the payoff lands in the last words.
- (3) Strong: smug and defensive, it redefines the job instead of
  apologizing.
- (4) Strong: one line, 126 characters, reads in one breath.
- (5) Strong: the cornfield is a fresh, specific detail, and it does
  not appear in a 40-title sample of the field, which is saturated with
  lake, cul-de-sac, wedding and recalculating angles.

### B, runner-up

"In 500 feet, turn left into the cornfield. The map drew the road, I
just read it aloud, and I read it very confidently."

- (1) Strong, (2) strong, "I read it very confidently" is the turn,
  (3) strong, blames the map, (4) strong, 119 characters, (5) strong,
  cornfield detail.
- Loses to A: the payoff is a boast about confidence, while A reframes
  the whole promise, a sharper sting.

### C, third

"The map said turn left, so I turned you left, into a cornfield. If the
map wanted a road there, it should have drawn one."

- (1) Strong, (2) good, the map should have drawn one is the turn,
  (3) strong, defensive and blaming the map, (4) strong, 121
  characters, (5) strong, cornfield detail.
- Loses to A: the second sentence argues with the map instead of
  delivering the excuse, and the punch arrives a beat late.

## Run

```
MAKEFUN_OUTPUT_DIR=<dir> node main.ts
```

Writes `entry.txt` (UTF-8, 126 characters, one line) into the output dir.
