type submission = {
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string,
    line9: string,
    line10: string
}

type submitter = {
    firstName: string
    lastName: string
    email: string
    council: string
}

type reasonData = {
    heading: string,
    body: string,
    onChange: (event: any) => void
}

type reason = {
    reasonDataList: reasonData[]
}

type reasons = {
    reasonList: reason[]
}