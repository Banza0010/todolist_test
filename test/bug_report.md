# Bug report for todo-list application


# Issue/bug #1

## **Empty update text sets list items to an empty value**

## Description
When users click the update button without having entered any text in the update value textbox, the list item gets cleared and set to an empty value

## Proof showing bug/issue
[screen recording of the actual issue being replicated] or [screenshots ] 

## Expected behvaior

- If a user clicks the update button without having entered an update value, the item being updated should not be changed.

## Current behavior

- When a user clicks the update button without having entered an update value, the item gets updated to a empty value.

## Steps to reproduce

1. Add an item to the todo list
2. Do not add an update value on the item
3. click update button on the item without an update value
4. The item will be updated to an empty/null value
5. Item can still be edited or removed

## Environments

local environment

## Severity and priority

Severity = Minor (Results in some unexpected or undesired behavior, but not enough to disrupt system function) 

Priority = Medium (can be fixed in the ordinary course of development and testing)
