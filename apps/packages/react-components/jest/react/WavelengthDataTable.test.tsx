import React from "react";
import { WavelengthDataTable } from "../../src";
import { expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

const data = [
  {
    id: 1,
    name: "Cy gargar",
    job: "Quality Control Specialist",
    location: "Canada",
    age: 4,
  },
  {
    id: 2,
    name: "Hart Hagerty",
    job: "Desktop Support Technician",
    location: "United States",
    age: 42,
    editable: true,
  },
  {
    id: 3,
    name: "Brice Swyre",
    job: "Tax Accountant",
    location: "China",
    age: 26,
  },
  {
    id: 4,
    name: "zy gargar",
    job: "Quality Control Specialist",
    location: "Canada",
    age: 4,
  },
];

const columns = [
  {
    key: "name",
    title: "Name",
    width: "50px",
  },
  {
    key: "job",
    title: "Job",
    width: "300px",
  },
  {
    key: "location",
    title: "Location",
    width: "90px",
  },
  {
    key: "age",
    title: "Age",
    width: "90px",
    editable: true,
  },
];
describe("WavelengthContentPlaceholder should", () => {
  it("render for close modal outside", async () => {
    render(
      <div data-testid="default">
        <WavelengthDataTable data={data} columns={columns} itemsPerPage={0} totalPages={0} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("default");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);

    const KebabPlaceHolder = screen.findByTitle("KebabIcon-3");
    expect(fireEvent.click(await KebabPlaceHolder)).toBe(true);
    const contentFilterHolder = screen.findByTitle("MenuListFilterButton-3");
    expect(fireEvent.click(await contentFilterHolder)).toBe(true);

    const divModal = screen.getByTitle("StyledBoxDiv");
    expect(fireEvent.mouseDown(await divModal)).toBe(true);
  });
  it("render without any fields", async () => {
    render(
      <div data-testid="default">
        <WavelengthDataTable columns={[]} itemsPerPage={0} totalPages={0} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("default");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("render with props", async () => {
    render(
      <div data-testid="tablewithdata">
        <WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />
      </div>,
    );
    const contentPlaceHolder = screen.getByTestId("tablewithdata");
    expect(fireEvent.load(contentPlaceHolder)).toEqual(true);
  });
  it("Testing dropdown for string", async () => {
    render(<WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />);
    const contentPlaceHolder = screen.findByTitle("KebabIcon-1");
    expect(fireEvent.click(await contentPlaceHolder)).toBe(true);
    const MenuListPlaceHolder = screen.findByTitle("MenuListASC-1");
    expect(fireEvent.click(await MenuListPlaceHolder)).toBe(true);
    const MenuListDESPlaceHolder = screen.findByTitle("MenuListDES-1");
    expect(fireEvent.click(await MenuListDESPlaceHolder)).toBe(true);
  });
  it("Testing dropdown for string but return 0", async () => {
    const mockData = [
      {
        id: 1,
        name: true,
        job: true,
        location: true,
        age: true,
      },
      {
        id: 2,
        name: true,
        job: true,
        location: true,
        age: true,
      },
    ];
    render(<WavelengthDataTable data={mockData} columns={columns} itemsPerPage={6} totalPages={6} />);
    const contentPlaceHolder = screen.findByTitle("KebabIcon-1");
    expect(fireEvent.click(await contentPlaceHolder)).toBe(true);
    const MenuListPlaceHolder = screen.findByTitle("MenuListASC-1");
    expect(fireEvent.click(await MenuListPlaceHolder)).toBe(true);
    const MenuListDESPlaceHolder = screen.findByTitle("MenuListDES-1");
    expect(fireEvent.click(await MenuListDESPlaceHolder)).toBe(true);
  });
  it("Testing dropdown for num", async () => {
    render(<WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />);
    const contentPlaceHolder = screen.findByTitle("KebabIcon-3");
    expect(fireEvent.click(await contentPlaceHolder)).toBe(true);
    const MenuListPlaceHolder = screen.findByTitle("MenuListASC-3");
    expect(fireEvent.click(await MenuListPlaceHolder)).toBe(true);
    const MenuListDESPlaceHolder = screen.findByTitle("MenuListDES-3");
    expect(fireEvent.click(await MenuListDESPlaceHolder)).toBe(true);
  });
  it("Testing dropdown for filter", async () => {
    render(<WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />);
    const contentPlaceHolder = screen.findByTitle("KebabIcon-1");
    expect(fireEvent.click(await contentPlaceHolder)).toBe(true);
    const contentFilterHolder = screen.findByTitle("MenuListFilterButton-1");
    expect(fireEvent.click(await contentFilterHolder)).toBe(true);
    const input = screen.getByTitle("Inputfiltertest-1") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
    fireEvent.keyDown(input, { key: "Backspace", code: "Backspace", charCode: 8 });

    const closeModal = screen.getByTitle("ModalClose-1");
    expect(fireEvent.click(await closeModal)).toBe(true);
  });
  it("Testing span and input with double click and enter", async () => {
    render(<WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />);

    //--double click and enter
    const getCell = screen.getByTitle("spanRow-1-name-0");
    expect(fireEvent.doubleClick(await getCell)).toBe(true);

    const input = screen.getByTitle("styledRow-1-name-0") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "new name" } });
    expect(input.value).toBe("new name");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
  });

  it("Testing span and input with double click and escape", async () => {
    render(<WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />);

    //--double click and escape
    const getCell = screen.getByTitle("spanRow-1-name-0");
    expect(fireEvent.doubleClick(await getCell)).toBe(true);

    const input = screen.getByTitle("styledRow-1-name-0") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "new name" } });
    expect(input.value).toBe("new name");
    fireEvent.keyDown(input, { key: "Escape", code: "Escape", charCode: 27 });
  });

  it("Testing span and input with number and onblur", async () => {
    render(<WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />);
    //--double click and escape
    const getCell = screen.getByTitle("spanRow-1-age-3");
    expect(fireEvent.doubleClick(await getCell)).toBe(true);

    const input = screen.getByTitle("styledRow-1-age-3") as HTMLInputElement;
    fireEvent.change(input, { target: { value: 4 } });
    fireEvent.blur(input);
    expect(input.value).toBe("4");
  });
  it("Testing handleChange", async () => {
    render(<WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />);

    const contentPlaceHolder = screen.findByTitle("KebabIcon-3");
    expect(fireEvent.click(await contentPlaceHolder)).toBe(true);
    //press filter button
    const contentFilterHolder = screen.findByTitle("MenuListFilterButton-3");
    expect(fireEvent.click(await contentFilterHolder)).toBe(true);
    const selElt = screen.getByTitle("filterSelect-3") as HTMLSelectElement;
    fireEvent.change(selElt, { target: { value: "age" } });
    expect(selElt.value).toBe("age");
    const input = screen.getByTitle("Inputfiltertest-3") as HTMLInputElement;
    fireEvent.change(input, { target: { value: 4 } });
    expect(input.value).toBe("4");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
  });
  it("Testing filter case for there are results for string", async () => {
    //this works for the use effect string for string
    render(<WavelengthDataTable data={data} columns={columns} itemsPerPage={6} totalPages={6} />);

    const contentPlaceHolder = screen.findByTitle("KebabIcon-3");
    expect(fireEvent.click(await contentPlaceHolder)).toBe(true);

    const contentFilterHolder = screen.findByTitle("MenuListFilterButton-3");
    expect(fireEvent.click(await contentFilterHolder)).toBe(true);

    const selElt = screen.getByTitle("filterSelect-3") as HTMLSelectElement;
    fireEvent.change(selElt, { target: { value: "name" } });

    const input = screen.getByTitle("Inputfiltertest-3") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "e" } });
    expect(input.value).toBe("e");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
  });

  it("Testing dropdown for filter for no results for number", async () => {
    render(<WavelengthDataTable data={[]} columns={columns} itemsPerPage={6} totalPages={6} />);
    const contentPlaceHolder = screen.findByTitle("KebabIcon-3");
    expect(fireEvent.click(await contentPlaceHolder)).toBe(true);
    const contentFilterHolder = screen.findByTitle("MenuListFilterButton-3");
    expect(fireEvent.click(await contentFilterHolder)).toBe(true);
    const selElt = screen.getByTitle("filterSelect-3") as HTMLSelectElement;
    fireEvent.change(selElt, { target: { value: "age" } });

    const input = screen.getByTitle("Inputfiltertest-3") as HTMLInputElement;
    fireEvent.change(input, { target: { value: 865 } });
    expect(input.value).toBe("865");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

    const closeModal = screen.getByTitle("ModalClose-3");
    expect(fireEvent.click(await closeModal)).toBe(true);

    const noResultsScreen = await screen.findByTitle("NoDataRows");
    expect(noResultsScreen).toBeTruthy;
  });
});
