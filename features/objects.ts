const profile = {
    firstName: 'Alex',
    coords: {
        lat: 0,
        lng: 15
    },
    age: 20,
    setAge(age: number): void {
        this.age = age;
    }
};
const { age, firstName }: { age: number; firstName: string } = profile;