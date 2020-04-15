export class Triangle {
  points: number;

  getPoints() {
    console.log(`A triangle has ${this.points} points`);
  }

  setPoints(points: number) {
    this.points = points;
  }
}

export class Square {
  points: number;

  getPoints() {
    console.log(`A square has ${this.points} points`);
  }

  setPoints(points: number) {
    this.points = points;
  }
}
