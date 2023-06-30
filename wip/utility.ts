// Utilit Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const std1 : Assignment= {
    studentId : "aa111",
    title: 'SI THu Htet',
    grade : 10
}

// updateAssignment(std1, {asd : true})

// Require and Readonly

const recordAssignment = (assign : Required<Assignment>) : Assignment => {
    return assign;
}

const assignVerified: Readonly<Assignment> = {
    ...std1, verified : true
}
// assignVerified.verified = false;
// recordAssignment(std1);


// Record

const hexColorMap: Record<string, string> = {
    red : 'FF0000',
    green : '00FF00',
    blue : '0000FF',
}

type Students = "Sara" | "Kelly";
type LetterGrade = "A" | "B" | "C" | "D" | "U";

const finalGrades : Record<Students, LetterGrade> = {
    "Sara" : "A",
    "Kelly" : "B"
}

interface Grades {
    assign1 : number,
    assign2: number
}

const gradeData : Record<Students, Grades> = {
    "Sara" : {assign1 : 85, assign2 : 93},
    "Kelly" : {assign1 : 89, assign2 : 100}
}

//  Pick and Omit
type AssgnResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssgnResult = {
    studentId : "kla",
    grade : 12
}

type AssignPreview = Omit<Assignment, 'grade' | "verified">;

const preview : AssignPreview = {
    studentId : 'asd',
    title : 'asd'
}

// Exclude and Extract

type asjustedGrade = Exclude<LetterGrade, 'U'>;

type heighGrades = Extract<LetterGrade, 'A' | 'B'>

// Nonnullable

type AllPossibleGrade = "Dave" | 'Jhon' | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrade>;

// ReturnType

// type newAssign = {title: string, points : number};

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

