import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ onSearchClick, onSearchPress }) {
    return (
        <InputGroup>
            <Input
                placeholder="Search recipes by name, ingredients, cuisine, diet, allergies,..."
                onKeyPress={onSearchPress}
            />
            <InputGroupAddon addonType="append">
                <InputGroupText className="rounded-right">
                    <div
                        onClick={onSearchClick}
                        className="icon-wrapper m-0 border-0"
                    >
                        <AiOutlineSearch />
                    </div>
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    );
}

export default SearchBar;
