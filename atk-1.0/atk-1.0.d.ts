/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import '@girs/gjs';
import type classes from './atk-1.0-classes.d.ts';
export { classes as AtkClasses };
export namespace Atk {
    /**
     * Atk-1.0
     */
    /**
     * Specifies how xy coordinates are to be interpreted. Used by functions such
     * as atk_component_get_position() and atk_text_get_character_extents()
     */
    export namespace CoordType {
        export const $gtype: GObject.GType<CoordType>;
    }
    enum CoordType {
        /**
         * specifies xy coordinates relative to the screen
         */
        SCREEN,
        /**
         * specifies xy coordinates relative to the widget's
         * top-level window
         */
        WINDOW = 1,
        /**
         * specifies xy coordinates relative to the widget's
         * immediate parent. Since: 2.30
         */
        PARENT = 2,
    }
    /**
     * Specifies the type of a keyboard evemt.
     */
    export namespace KeyEventType {
        export const $gtype: GObject.GType<KeyEventType>;
    }
    enum KeyEventType {
        /**
         * specifies a key press event
         */
        PRESS,
        /**
         * specifies a key release event
         */
        RELEASE = 1,
        /**
         * Not a valid value; specifies end of enumeration
         */
        LAST_DEFINED = 2,
    }
    /**
     * Describes the layer of a component
     *
     * These enumerated "layer values" are used when determining which UI
     * rendering layer a component is drawn into, which can help in making
     * determinations of when components occlude one another.
     */
    export namespace Layer {
        export const $gtype: GObject.GType<Layer>;
    }
    enum Layer {
        /**
         * The object does not have a layer
         */
        INVALID,
        /**
         * This layer is reserved for the desktop background
         */
        BACKGROUND = 1,
        /**
         * This layer is used for Canvas components
         */
        CANVAS = 2,
        /**
         * This layer is normally used for components
         */
        WIDGET = 3,
        /**
         * This layer is used for layered components
         */
        MDI = 4,
        /**
         * This layer is used for popup components, such as menus
         */
        POPUP = 5,
        /**
         * This layer is reserved for future use.
         */
        OVERLAY = 6,
        /**
         * This layer is used for toplevel windows.
         */
        WINDOW = 7,
    }
    /**
     * Enumeration used to indicate a type of live region and how assertive it
     * should be in terms of speaking notifications. Currently, this is only used
     * for "notification" events, but it may be used for additional purposes
     * in the future.
     */
    export namespace Live {
        export const $gtype: GObject.GType<Live>;
    }
    enum Live {
        /**
         * No live region.
         */
        NONE,
        /**
         * This live region should be considered polite.
         */
        POLITE = 1,
        /**
         * This live region should be considered assertive.
         */
        ASSERTIVE = 2,
    }
    /**
     * Describes the type of the relation
     */
    export namespace RelationType {
        export const $gtype: GObject.GType<RelationType>;
    }
    enum RelationType {
        /**
         * Not used, represens "no relationship" or an error condition.
         */
        NULL,
        /**
         * Indicates an object controlled by one or more target objects.
         */
        CONTROLLED_BY = 1,
        /**
         * Indicates an object is an controller for one or more target objects.
         */
        CONTROLLER_FOR = 2,
        /**
         * Indicates an object is a label for one or more target objects.
         */
        LABEL_FOR = 3,
        /**
         * Indicates an object is labelled by one or more target objects.
         */
        LABELLED_BY = 4,
        /**
         * Indicates an object is a member of a group of one or more target objects.
         */
        MEMBER_OF = 5,
        /**
         * Indicates an object is a cell in a treetable which is displayed because a cell in the same column is expanded and identifies that cell.
         */
        NODE_CHILD_OF = 6,
        /**
         * Indicates that the object has content that flows logically to another
         *  AtkObject in a sequential way, (for instance text-flow).
         */
        FLOWS_TO = 7,
        /**
         * Indicates that the object has content that flows logically from
         *  another AtkObject in a sequential way, (for instance text-flow).
         */
        FLOWS_FROM = 8,
        /**
         * Indicates a subwindow attached to a component but otherwise has no connection in  the UI heirarchy to that component.
         */
        SUBWINDOW_OF = 9,
        /**
         * Indicates that the object visually embeds
         *  another object's content, i.e. this object's content flows around
         *  another's content.
         */
        EMBEDS = 10,
        /**
         * Reciprocal of %ATK_RELATION_EMBEDS, indicates that
         *  this object's content is visualy embedded in another object.
         */
        EMBEDDED_BY = 11,
        /**
         * Indicates that an object is a popup for another object.
         */
        POPUP_FOR = 12,
        /**
         * Indicates that an object is a parent window of another object.
         */
        PARENT_WINDOW_OF = 13,
        /**
         * Reciprocal of %ATK_RELATION_DESCRIPTION_FOR. Indicates that one
         * or more target objects provide descriptive information about this object. This relation
         * type is most appropriate for information that is not essential as its presentation may
         * be user-configurable and/or limited to an on-demand mechanism such as an assistive
         * technology command. For brief, essential information such as can be found in a widget's
         * on-screen label, use %ATK_RELATION_LABELLED_BY. For an on-screen error message, use
         * %ATK_RELATION_ERROR_MESSAGE. For lengthy extended descriptive information contained in
         * an on-screen object, consider using %ATK_RELATION_DETAILS as assistive technologies may
         * provide a means for the user to navigate to objects containing detailed descriptions so
         * that their content can be more closely reviewed.
         */
        DESCRIBED_BY = 14,
        /**
         * Reciprocal of %ATK_RELATION_DESCRIBED_BY. Indicates that this
         * object provides descriptive information about the target object(s). See also
         * %ATK_RELATION_DETAILS_FOR and %ATK_RELATION_ERROR_FOR.
         */
        DESCRIPTION_FOR = 15,
        /**
         * Indicates an object is a cell in a treetable and is expanded to display other cells in the same column.
         */
        NODE_PARENT_OF = 16,
        /**
         * Reciprocal of %ATK_RELATION_DETAILS_FOR. Indicates that this object
         * has a detailed or extended description, the contents of which can be found in the target
         * object(s). This relation type is most appropriate for information that is sufficiently
         * lengthy as to make navigation to the container of that information desirable. For less
         * verbose information suitable for announcement only, see %ATK_RELATION_DESCRIBED_BY. If
         * the detailed information describes an error condition, %ATK_RELATION_ERROR_FOR should be
         * used instead. `Since:` ATK-2.26.
         */
        DETAILS = 17,
        /**
         * Reciprocal of %ATK_RELATION_DETAILS. Indicates that this object
         * provides a detailed or extended description about the target object(s). See also
         * %ATK_RELATION_DESCRIPTION_FOR and %ATK_RELATION_ERROR_FOR. `Since:` ATK-2.26.
         */
        DETAILS_FOR = 18,
        /**
         * Reciprocal of %ATK_RELATION_ERROR_FOR. Indicates that this object
         * has one or more errors, the nature of which is described in the contents of the target
         * object(s). Objects that have this relation type should also contain %ATK_STATE_INVALID_ENTRY
         * in their #AtkStateSet. `Since:` ATK-2.26.
         */
        ERROR_MESSAGE = 19,
        /**
         * Reciprocal of %ATK_RELATION_ERROR_MESSAGE. Indicates that this object
         * contains an error message describing an invalid condition in the target object(s). `Since:`
         * ATK_2.26.
         */
        ERROR_FOR = 20,
        /**
         * Not used, this value indicates the end of the enumeration.
         */
        LAST_DEFINED = 21,
    }
    /**
     * Describes the role of an object
     *
     * These are the built-in enumerated roles that UI components can have
     * in ATK.  Other roles may be added at runtime, so an AtkRole >=
     * %ATK_ROLE_LAST_DEFINED is not necessarily an error.
     */
    export namespace Role {
        export const $gtype: GObject.GType<Role>;
    }
    enum Role {
        /**
         * Invalid role
         */
        INVALID,
        /**
         * A label which represents an accelerator
         */
        ACCELERATOR_LABEL = 1,
        /**
         * An object which is an alert to the user. Assistive Technologies typically respond to ATK_ROLE_ALERT by reading the entire onscreen contents of containers advertising this role.  Should be used for warning dialogs, etc.
         */
        ALERT = 2,
        /**
         * An object which is an animated image
         */
        ANIMATION = 3,
        /**
         * An arrow in one of the four cardinal directions
         */
        ARROW = 4,
        /**
         * An object that displays a calendar and allows the user to select a date
         */
        CALENDAR = 5,
        /**
         * An object that can be drawn into and is used to trap events
         */
        CANVAS = 6,
        /**
         * A choice that can be checked or unchecked and provides a separate indicator for the current state
         */
        CHECK_BOX = 7,
        /**
         * A menu item with a check box
         */
        CHECK_MENU_ITEM = 8,
        /**
         * A specialized dialog that lets the user choose a color
         */
        COLOR_CHOOSER = 9,
        /**
         * The header for a column of data
         */
        COLUMN_HEADER = 10,
        /**
         * A collapsible list of choices the user can select from
         */
        COMBO_BOX = 11,
        /**
         * An object whose purpose is to allow a user to edit a date
         */
        DATE_EDITOR = 12,
        /**
         * An inconifed internal frame within a DESKTOP_PANE
         */
        DESKTOP_ICON = 13,
        /**
         * A pane that supports internal frames and iconified versions of those internal frames
         */
        DESKTOP_FRAME = 14,
        /**
         * An object whose purpose is to allow a user to set a value
         */
        DIAL = 15,
        /**
         * A top level window with title bar and a border
         */
        DIALOG = 16,
        /**
         * A pane that allows the user to navigate through and select the contents of a directory
         */
        DIRECTORY_PANE = 17,
        /**
         * An object used for drawing custom user interface elements
         */
        DRAWING_AREA = 18,
        /**
         * A specialized dialog that lets the user choose a file
         */
        FILE_CHOOSER = 19,
        /**
         * A object that fills up space in a user interface
         */
        FILLER = 20,
        /**
         * A specialized dialog that lets the user choose a font
         */
        FONT_CHOOSER = 21,
        /**
         * A top level window with a title bar, border, menubar, etc.
         */
        FRAME = 22,
        /**
         * A pane that is guaranteed to be painted on top of all panes beneath it
         */
        GLASS_PANE = 23,
        /**
         * A document container for HTML, whose children represent the document content
         */
        HTML_CONTAINER = 24,
        /**
         * A small fixed size picture, typically used to decorate components
         */
        ICON = 25,
        /**
         * An object whose primary purpose is to display an image
         */
        IMAGE = 26,
        /**
         * A frame-like object that is clipped by a desktop pane
         */
        INTERNAL_FRAME = 27,
        /**
         * An object used to present an icon or short string in an interface
         */
        LABEL = 28,
        /**
         * A specialized pane that allows its children to be drawn in layers, providing a form of stacking order
         */
        LAYERED_PANE = 29,
        /**
         * An object that presents a list of objects to the user and allows the user to select one or more of them
         */
        LIST = 30,
        /**
         * An object that represents an element of a list
         */
        LIST_ITEM = 31,
        /**
         * An object usually found inside a menu bar that contains a list of actions the user can choose from
         */
        MENU = 32,
        /**
         * An object usually drawn at the top of the primary dialog box of an application that contains a list of menus the user can choose from
         */
        MENU_BAR = 33,
        /**
         * An object usually contained in a menu that presents an action the user can choose
         */
        MENU_ITEM = 34,
        /**
         * A specialized pane whose primary use is inside a DIALOG
         */
        OPTION_PANE = 35,
        /**
         * An object that is a child of a page tab list
         */
        PAGE_TAB = 36,
        /**
         * An object that presents a series of panels (or page tabs), one at a time, through some mechanism provided by the object
         */
        PAGE_TAB_LIST = 37,
        /**
         * A generic container that is often used to group objects
         */
        PANEL = 38,
        /**
         * A text object uses for passwords, or other places where the text content is not shown visibly to the user
         */
        PASSWORD_TEXT = 39,
        /**
         * A temporary window that is usually used to offer the user a list of choices, and then hides when the user selects one of those choices
         */
        POPUP_MENU = 40,
        /**
         * An object used to indicate how much of a task has been completed
         */
        PROGRESS_BAR = 41,
        /**
         * An object the user can manipulate to tell the application to do something
         */
        BUTTON = 42,
        /**
         * A specialized check box that will cause other radio buttons in the same group to become unchecked when this one is checked
         */
        RADIO_BUTTON = 43,
        /**
         * A check menu item which belongs to a group. At each instant exactly one of the radio menu items from a group is selected
         */
        RADIO_MENU_ITEM = 44,
        /**
         * A specialized pane that has a glass pane and a layered pane as its children
         */
        ROOT_PANE = 45,
        /**
         * The header for a row of data
         */
        ROW_HEADER = 46,
        /**
         * An object usually used to allow a user to incrementally view a large amount of data.
         */
        SCROLL_BAR = 47,
        /**
         * An object that allows a user to incrementally view a large amount of information
         */
        SCROLL_PANE = 48,
        /**
         * An object usually contained in a menu to provide a visible and logical separation of the contents in a menu
         */
        SEPARATOR = 49,
        /**
         * An object that allows the user to select from a bounded range
         */
        SLIDER = 50,
        /**
         * A specialized panel that presents two other panels at the same time
         */
        SPLIT_PANE = 51,
        /**
         * An object used to get an integer or floating point number from the user
         */
        SPIN_BUTTON = 52,
        /**
         * An object which reports messages of minor importance to the user
         */
        STATUSBAR = 53,
        /**
         * An object used to represent information in terms of rows and columns
         */
        TABLE = 54,
        /**
         * A cell in a table
         */
        TABLE_CELL = 55,
        /**
         * The header for a column of a table
         */
        TABLE_COLUMN_HEADER = 56,
        /**
         * The header for a row of a table
         */
        TABLE_ROW_HEADER = 57,
        /**
         * A menu item used to tear off and reattach its menu
         */
        TEAR_OFF_MENU_ITEM = 58,
        /**
         * An object that represents an accessible terminal.  (Since: 0.6)
         */
        TERMINAL = 59,
        /**
         * An interactive widget that supports multiple lines of text and
         * optionally accepts user input, but whose purpose is not to solicit user input.
         * Thus ATK_ROLE_TEXT is appropriate for the text view in a plain text editor
         * but inappropriate for an input field in a dialog box or web form. For widgets
         * whose purpose is to solicit input from the user, see ATK_ROLE_ENTRY and
         * ATK_ROLE_PASSWORD_TEXT. For generic objects which display a brief amount of
         * textual information, see ATK_ROLE_STATIC.
         */
        TEXT = 60,
        /**
         * A specialized push button that can be checked or unchecked, but does not provide a separate indicator for the current state
         */
        TOGGLE_BUTTON = 61,
        /**
         * A bar or palette usually composed of push buttons or toggle buttons
         */
        TOOL_BAR = 62,
        /**
         * An object that provides information about another object
         */
        TOOL_TIP = 63,
        /**
         * An object used to represent hierarchical information to the user
         */
        TREE = 64,
        /**
         * An object capable of expanding and collapsing rows as well as showing multiple columns of data.   (Since: 0.7)
         */
        TREE_TABLE = 65,
        /**
         * The object contains some Accessible information, but its role is not known
         */
        UNKNOWN = 66,
        /**
         * An object usually used in a scroll pane
         */
        VIEWPORT = 67,
        /**
         * A top level window with no title or border.
         */
        WINDOW = 68,
        /**
         * An object that serves as a document header. (Since: 1.1.1)
         */
        HEADER = 69,
        /**
         * An object that serves as a document footer.  (Since: 1.1.1)
         */
        FOOTER = 70,
        /**
         * An object which is contains a paragraph of text content.   (Since: 1.1.1)
         */
        PARAGRAPH = 71,
        /**
         * An object which describes margins and tab stops, etc. for text objects which it controls (should have CONTROLLER_FOR relation to such).   (Since: 1.1.1)
         */
        RULER = 72,
        /**
         * The object is an application object, which may contain `ATK_ROLE_FRAME` objects or other types of accessibles.  The root accessible of any application's ATK hierarchy should have ATK_ROLE_APPLICATION.   (Since: 1.1.4)
         */
        APPLICATION = 73,
        /**
         * The object is a dialog or list containing items for insertion into an entry widget, for instance a list of words for completion of a text entry.   (Since: 1.3)
         */
        AUTOCOMPLETE = 74,
        /**
         * The object is an editable text object in a toolbar.  (Since: 1.5)
         */
        EDIT_BAR = 75,
        /**
         * The object is an embedded container within a document or panel.  This role is a grouping "hint" indicating that the contained objects share a context.  (Since: 1.7.2)
         */
        EMBEDDED = 76,
        /**
         * The object is a component whose textual content may be entered or modified by the user, provided `ATK_STATE_EDITABLE` is present.   (Since: 1.11)
         */
        ENTRY = 77,
        /**
         * The object is a graphical depiction of quantitative data. It may contain multiple subelements whose attributes and/or description may be queried to obtain both the quantitative data and information about how the data is being presented. The LABELLED_BY relation is particularly important in interpreting objects of this type, as is the accessible-description property.  (Since: 1.11)
         */
        CHART = 78,
        /**
         * The object contains descriptive information, usually textual, about another user interface element such as a table, chart, or image.  (Since: 1.11)
         */
        CAPTION = 79,
        /**
         * The object is a visual frame or container which contains a view of document content. Document frames may occur within another Document instance, in which case the second document may be said to be embedded in the containing instance. HTML frames are often ROLE_DOCUMENT_FRAME. Either this object, or a singleton descendant, should implement the Document interface.  (Since: 1.11)
         */
        DOCUMENT_FRAME = 80,
        /**
         * The object serves as a heading for content which follows it in a document. The 'heading level' of the heading, if availabe, may be obtained by querying the object's attributes.
         */
        HEADING = 81,
        /**
         * The object is a containing instance which encapsulates a page of information. `ATK_ROLE_PAGE` is used in documents and content which support a paginated navigation model.  (Since: 1.11)
         */
        PAGE = 82,
        /**
         * The object is a containing instance of document content which constitutes a particular 'logical' section of the document. The type of content within a section, and the nature of the section division itself, may be obtained by querying the object's attributes. Sections may be nested. (Since: 1.11)
         */
        SECTION = 83,
        /**
         * The object is redundant with another object in the hierarchy, and is exposed for purely technical reasons.  Objects of this role should normally be ignored by clients. (Since: 1.11)
         */
        REDUNDANT_OBJECT = 84,
        /**
         * The object is a container for form controls, for instance as part of a
         * web form or user-input form within a document.  This role is primarily a tag/convenience for
         * clients when navigating complex documents, it is not expected that ordinary GUI containers will
         * always have ATK_ROLE_FORM. (Since: 1.12.0)
         */
        FORM = 85,
        /**
         * The object is a hypertext anchor, i.e. a "link" in a
         * hypertext document.  Such objects are distinct from 'inline'
         * content which may also use the Hypertext/Hyperlink interfaces
         * to indicate the range/location within a text object where
         * an inline or embedded object lies.  (Since: 1.12.1)
         */
        LINK = 86,
        /**
         * The object is a window or similar viewport
         * which is used to allow composition or input of a 'complex character',
         * in other words it is an "input method window." (Since: 1.12.1)
         */
        INPUT_METHOD_WINDOW = 87,
        /**
         * A row in a table.  (Since: 2.1.0)
         */
        TABLE_ROW = 88,
        /**
         * An object that represents an element of a tree.  (Since: 2.1.0)
         */
        TREE_ITEM = 89,
        /**
         * A document frame which contains a spreadsheet.  (Since: 2.1.0)
         */
        DOCUMENT_SPREADSHEET = 90,
        /**
         * A document frame which contains a presentation or slide content.  (Since: 2.1.0)
         */
        DOCUMENT_PRESENTATION = 91,
        /**
         * A document frame which contains textual content, such as found in a word processing application.  (Since: 2.1.0)
         */
        DOCUMENT_TEXT = 92,
        /**
         * A document frame which contains HTML or other markup suitable for display in a web browser.  (Since: 2.1.0)
         */
        DOCUMENT_WEB = 93,
        /**
         * A document frame which contains email content to be displayed or composed either in plain text or HTML.  (Since: 2.1.0)
         */
        DOCUMENT_EMAIL = 94,
        /**
         * An object found within a document and designed to present a comment, note, or other annotation. In some cases, this object might not be visible until activated.  (Since: 2.1.0)
         */
        COMMENT = 95,
        /**
         * A non-collapsible list of choices the user can select from. (Since: 2.1.0)
         */
        LIST_BOX = 96,
        /**
         * A group of related widgets. This group typically has a label. (Since: 2.1.0)
         */
        GROUPING = 97,
        /**
         * An image map object. Usually a graphic with multiple hotspots, where each hotspot can be activated resulting in the loading of another document or section of a document. (Since: 2.1.0)
         */
        IMAGE_MAP = 98,
        /**
         * A transitory object designed to present a message to the user, typically at the desktop level rather than inside a particular application.  (Since: 2.1.0)
         */
        NOTIFICATION = 99,
        /**
         * An object designed to present a message to the user within an existing window. (Since: 2.1.0)
         */
        INFO_BAR = 100,
        /**
         * A bar that serves as a level indicator to, for instance, show the strength of a password or the state of a battery.  (Since: 2.7.3)
         */
        LEVEL_BAR = 101,
        /**
         * A bar that serves as the title of a window or a
         * dialog. (Since: 2.12)
         */
        TITLE_BAR = 102,
        /**
         * An object which contains a text section
         * that is quoted from another source. (Since: 2.12)
         */
        BLOCK_QUOTE = 103,
        /**
         * An object which represents an audio element. (Since: 2.12)
         */
        AUDIO = 104,
        /**
         * An object which represents a video element. (Since: 2.12)
         */
        VIDEO = 105,
        /**
         * A definition of a term or concept. (Since: 2.12)
         */
        DEFINITION = 106,
        /**
         * A section of a page that consists of a
         * composition that forms an independent part of a document, page, or
         * site. Examples: A blog entry, a news story, a forum post. (Since: 2.12)
         */
        ARTICLE = 107,
        /**
         * A region of a web page intended as a
         * navigational landmark. This is designed to allow Assistive
         * Technologies to provide quick navigation among key regions within a
         * document. (Since: 2.12)
         */
        LANDMARK = 108,
        /**
         * A text widget or container holding log content, such
         * as chat history and error logs. In this role there is a
         * relationship between the arrival of new items in the log and the
         * reading order. The log contains a meaningful sequence and new
         * information is added only to the end of the log, not at arbitrary
         * points. (Since: 2.12)
         */
        LOG = 109,
        /**
         * A container where non-essential information
         * changes frequently. Common usages of marquee include stock tickers
         * and ad banners. The primary difference between a marquee and a log
         * is that logs usually have a meaningful order or sequence of
         * important content changes. (Since: 2.12)
         */
        MARQUEE = 110,
        /**
         * A text widget or container that holds a mathematical
         * expression. (Since: 2.12)
         */
        MATH = 111,
        /**
         * A widget whose purpose is to display a rating,
         * such as the number of stars associated with a song in a media
         * player. Objects of this role should also implement
         * AtkValue. (Since: 2.12)
         */
        RATING = 112,
        /**
         * An object containing a numerical counter which
         * indicates an amount of elapsed time from a start point, or the time
         * remaining until an end point. (Since: 2.12)
         */
        TIMER = 113,
        /**
         * An object that represents a list of
         * term-value groups. A term-value group represents a individual
         * description and consist of one or more names
         * (ATK_ROLE_DESCRIPTION_TERM) followed by one or more values
         * (ATK_ROLE_DESCRIPTION_VALUE). For each list, there should not be
         * more than one group with the same term name. (Since: 2.12)
         */
        DESCRIPTION_LIST = 114,
        /**
         * An object that represents a term or phrase
         * with a corresponding definition. (Since: 2.12)
         */
        DESCRIPTION_TERM = 115,
        /**
         * An object that represents the
         * description, definition or value of a term. (Since: 2.12)
         */
        DESCRIPTION_VALUE = 116,
        /**
         * A generic non-container object whose purpose is to display a
         * brief amount of information to the user and whose role is known by the
         * implementor but lacks semantic value for the user. Examples in which
         * %ATK_ROLE_STATIC is appropriate include the message displayed in a message box
         * and an image used as an alternative means to display text. %ATK_ROLE_STATIC
         * should not be applied to widgets which are traditionally interactive, objects
         * which display a significant amount of content, or any object which has an
         * accessible relation pointing to another object. Implementors should expose the
         * displayed information through the accessible name of the object. If doing so seems
         * inappropriate, it may indicate that a different role should be used. For
         * labels which describe another widget, see %ATK_ROLE_LABEL. For text views, see
         * %ATK_ROLE_TEXT. For generic containers, see %ATK_ROLE_PANEL. For objects whose
         * role is not known by the implementor, see %ATK_ROLE_UNKNOWN. (Since: 2.16)
         */
        STATIC = 117,
        /**
         * An object that represents a mathematical fraction.
         * (Since: 2.16)
         */
        MATH_FRACTION = 118,
        /**
         * An object that represents a mathematical expression
         * displayed with a radical. (Since: 2.16)
         */
        MATH_ROOT = 119,
        /**
         * An object that contains text that is displayed as a
         * subscript. (Since: 2.16)
         */
        SUBSCRIPT = 120,
        /**
         * An object that contains text that is displayed as a
         * superscript. (Since: 2.16)
         */
        SUPERSCRIPT = 121,
        /**
         * An object that contains the text of a footnote. (Since: 2.26)
         */
        FOOTNOTE = 122,
        /**
         * Content previously deleted or proposed to be
         * deleted, e.g. in revision history or a content view providing suggestions
         * from reviewers. (Since: 2.34)
         */
        CONTENT_DELETION = 123,
        /**
         * Content previously inserted or proposed to be
         * inserted, e.g. in revision history or a content view providing suggestions
         * from reviewers. (Since: 2.34)
         */
        CONTENT_INSERTION = 124,
        /**
         * A run of content that is marked or highlighted, such as for
         * reference purposes, or to call it out as having a special purpose. If the
         * marked content has an associated section in the document elaborating on the
         * reason for the mark, then %ATK_RELATION_DETAILS should be used on the mark
         * to point to that associated section. In addition, the reciprocal relation
         * %ATK_RELATION_DETAILS_FOR should be used on the associated content section
         * to point back to the mark. (Since: 2.36)
         */
        MARK = 125,
        /**
         * A container for content that is called out as a proposed
         * change from the current version of the document, such as by a reviewer of the
         * content. This role should include either %ATK_ROLE_CONTENT_DELETION and/or
         * %ATK_ROLE_CONTENT_INSERTION children, in any order, to indicate what the
         * actual change is. (Since: 2.36)
         */
        SUGGESTION = 126,
        /**
         * A specialized push button to open a menu.
         * (Since: 2.46)
         */
        PUSH_BUTTON_MENU = 127,
        /**
         * A switch that can be toggled on/off.
         * (Since: 2.56)
         */
        SWITCH = 128,
        /**
         * not a valid role, used for finding end of the enumeration
         */
        LAST_DEFINED = 129,
        PUSH_BUTTON = 42,
    }
    /**
     * Specifies where an object should be placed on the screen when using scroll_to.
     */
    export namespace ScrollType {
        export const $gtype: GObject.GType<ScrollType>;
    }
    enum ScrollType {
        /**
         * Scroll the object vertically and horizontally to bring
         *   its top left corner to the top left corner of the window.
         */
        TOP_LEFT,
        /**
         * Scroll the object vertically and horizontally to
         *   bring its bottom right corner to the bottom right corner of the window.
         */
        BOTTOM_RIGHT = 1,
        /**
         * Scroll the object vertically to bring its top edge to
         *   the top edge of the window.
         */
        TOP_EDGE = 2,
        /**
         * Scroll the object vertically to bring its bottom
         *   edge to the bottom edge of the window.
         */
        BOTTOM_EDGE = 3,
        /**
         * Scroll the object vertically and horizontally to bring
         *   its left edge to the left edge of the window.
         */
        LEFT_EDGE = 4,
        /**
         * Scroll the object vertically and horizontally to
         *   bring its right edge to the right edge of the window.
         */
        RIGHT_EDGE = 5,
        /**
         * Scroll the object vertically and horizontally so that
         *   as much as possible of the object becomes visible. The exact placement is
         *   determined by the application.
         */
        ANYWHERE = 6,
    }
    /**
     * The possible types of states of an object
     */
    export namespace StateType {
        export const $gtype: GObject.GType<StateType>;
    }
    enum StateType {
        /**
         * Indicates an invalid state - probably an error condition.
         */
        INVALID,
        /**
         * Indicates a window is currently the active window, or an object is the active subelement within a container or table. ATK_STATE_ACTIVE should not be used for objects which have ATK_STATE_FOCUSABLE or ATK_STATE_SELECTABLE: Those objects should use ATK_STATE_FOCUSED and ATK_STATE_SELECTED respectively. ATK_STATE_ACTIVE is a means to indicate that an object which is not focusable and not selectable is the currently-active item within its parent container.
         */
        ACTIVE = 1,
        /**
         * Indicates that the object is 'armed', i.e. will be activated by if a pointer button-release event occurs within its bounds.  Buttons often enter this state when a pointer click occurs within their bounds, as a precursor to activation. ATK_STATE_ARMED has been deprecated since ATK-2.16 and should not be used in newly-written code.
         */
        ARMED = 2,
        /**
         * Indicates the current object is busy, i.e. onscreen representation is in the process of changing, or the object is temporarily unavailable for interaction due to activity already in progress.  This state may be used by implementors of Document to indicate that content loading is underway.  It also may indicate other 'pending' conditions; clients may wish to interrogate this object when the ATK_STATE_BUSY flag is removed.
         */
        BUSY = 3,
        /**
         * Indicates this object is currently checked, for instance a checkbox is 'non-empty'.
         */
        CHECKED = 4,
        /**
         * Indicates that this object no longer has a valid backing widget (for instance, if its peer object has been destroyed)
         */
        DEFUNCT = 5,
        /**
         * Indicates that this object can contain text, and that the
         * user can change the textual contents of this object by editing those contents
         * directly. For an object which is expected to be editable due to its type, but
         * which cannot be edited due to the application or platform preventing the user
         * from doing so, that object's #AtkStateSet should lack ATK_STATE_EDITABLE and
         * should contain ATK_STATE_READ_ONLY.
         */
        EDITABLE = 6,
        /**
         * Indicates that this object is enabled, i.e. that it currently reflects some application state. Objects that are "greyed out" may lack this state, and may lack the STATE_SENSITIVE if direct user interaction cannot cause them to acquire STATE_ENABLED. See also: ATK_STATE_SENSITIVE
         */
        ENABLED = 7,
        /**
         * Indicates this object allows progressive disclosure of its children
         */
        EXPANDABLE = 8,
        /**
         * Indicates this object its expanded - see ATK_STATE_EXPANDABLE above
         */
        EXPANDED = 9,
        /**
         * Indicates this object can accept keyboard focus, which means all events resulting from typing on the keyboard will normally be passed to it when it has focus
         */
        FOCUSABLE = 10,
        /**
         * Indicates this object currently has the keyboard focus
         */
        FOCUSED = 11,
        /**
         * Indicates the orientation of this object is horizontal; used, for instance, by objects of ATK_ROLE_SCROLL_BAR.  For objects where vertical/horizontal orientation is especially meaningful.
         */
        HORIZONTAL = 12,
        /**
         * Indicates this object is minimized and is represented only by an icon
         */
        ICONIFIED = 13,
        /**
         * Indicates something must be done with this object before the user can interact with an object in a different window
         */
        MODAL = 14,
        /**
         * Indicates this (text) object can contain multiple lines of text
         */
        MULTI_LINE = 15,
        /**
         * Indicates this object allows more than one of its children to be selected at the same time, or in the case of text objects, that the object supports non-contiguous text selections.
         */
        MULTISELECTABLE = 16,
        /**
         * Indicates this object paints every pixel within its rectangular region.
         */
        OPAQUE = 17,
        /**
         * Indicates this object is currently pressed.
         */
        PRESSED = 18,
        /**
         * Indicates the size of this object is not fixed
         */
        RESIZABLE = 19,
        /**
         * Indicates this object is the child of an object that allows its children to be selected and that this child is one of those children that can be selected
         */
        SELECTABLE = 20,
        /**
         * Indicates this object is the child of an object that allows its children to be selected and that this child is one of those children that has been selected
         */
        SELECTED = 21,
        /**
         * Indicates this object is sensitive, e.g. to user interaction.
         * STATE_SENSITIVE usually accompanies STATE_ENABLED for user-actionable controls,
         * but may be found in the absence of STATE_ENABLED if the current visible state of the
         * control is "disconnected" from the application state.  In such cases, direct user interaction
         * can often result in the object gaining STATE_SENSITIVE, for instance if a user makes
         * an explicit selection using an object whose current state is ambiguous or undefined.
         * `see` STATE_ENABLED, STATE_INDETERMINATE.
         */
        SENSITIVE = 22,
        /**
         * Indicates this object, the object's parent, the object's parent's parent, and so on,
         * are all 'shown' to the end-user, i.e. subject to "exposure" if blocking or obscuring objects do not interpose
         * between this object and the top of the window stack.
         */
        SHOWING = 23,
        /**
         * Indicates this (text) object can contain only a single line of text
         */
        SINGLE_LINE = 24,
        /**
         * Indicates that the information returned for this object may no longer be
         * synchronized with the application state.  This is implied if the object has STATE_TRANSIENT,
         * and can also occur towards the end of the object peer's lifecycle. It can also be used to indicate that
         * the index associated with this object has changed since the user accessed the object (in lieu of
         * "index-in-parent-changed" events).
         */
        STALE = 25,
        /**
         * Indicates this object is transient, i.e. a snapshot which may not emit events when its
         * state changes.  Data from objects with ATK_STATE_TRANSIENT should not be cached, since there may be no
         * notification given when the cached data becomes obsolete.
         */
        TRANSIENT = 26,
        /**
         * Indicates the orientation of this object is vertical
         */
        VERTICAL = 27,
        /**
         * Indicates this object is visible, e.g. has been explicitly marked for exposure to the user.
         * **note**: %ATK_STATE_VISIBLE is no guarantee that the object is actually unobscured on the screen, only
         * that it is 'potentially' visible, barring obstruction, being scrolled or clipped out of the
         * field of view, or having an ancestor container that has not yet made visible.
         * A widget is potentially onscreen if it has both %ATK_STATE_VISIBLE and %ATK_STATE_SHOWING.
         * The absence of %ATK_STATE_VISIBLE and %ATK_STATE_SHOWING is semantically equivalent to saying
         * that an object is 'hidden'.  See also %ATK_STATE_TRUNCATED, which applies if an object with
         * %ATK_STATE_VISIBLE and %ATK_STATE_SHOWING set lies within a viewport which means that its
         * contents are clipped, e.g. a truncated spreadsheet cell or
         * an image within a scrolling viewport.  Mostly useful for screen-review and magnification
         * algorithms.
         */
        VISIBLE = 28,
        /**
         * Indicates that "active-descendant-changed" event
         * is sent when children become 'active' (i.e. are selected or navigated to onscreen).
         * Used to prevent need to enumerate all children in very large containers, like tables.
         * The presence of STATE_MANAGES_DESCENDANTS is an indication to the client.
         * that the children should not, and need not, be enumerated by the client.
         * Objects implementing this state are expected to provide relevant state
         * notifications to listening clients, for instance notifications of visibility
         * changes and activation of their contained child objects, without the client
         * having previously requested references to those children.
         */
        MANAGES_DESCENDANTS = 29,
        /**
         * Indicates that the value, or some other quantifiable
         * property, of this AtkObject cannot be fully determined. In the case of a large
         * data set in which the total number of items in that set is unknown (e.g. 1 of
         * 999+), implementors should expose the currently-known set size (999) along
         * with this state. In the case of a check box, this state should be used to
         * indicate that the check box is a tri-state check box which is currently
         * neither checked nor unchecked.
         */
        INDETERMINATE = 30,
        /**
         * Indicates that an object is truncated, e.g. a text value in a speradsheet cell.
         */
        TRUNCATED = 31,
        /**
         * Indicates that explicit user interaction with an object is required by the user interface, e.g. a required field in a "web-form" interface.
         */
        REQUIRED = 32,
        /**
         * Indicates that the object has encountered an error condition due to failure of input validation. For instance, a form control may acquire this state in response to invalid or malformed user input.
         */
        INVALID_ENTRY = 33,
        /**
         * Indicates that the object in question implements some form of ¨typeahead¨ or
         * pre-selection behavior whereby entering the first character of one or more sub-elements
         * causes those elements to scroll into view or become selected.  Subsequent character input
         * may narrow the selection further as long as one or more sub-elements match the string.
         * This state is normally only useful and encountered on objects that implement Selection.
         * In some cases the typeahead behavior may result in full or partial ¨completion¨ of
         * the data in the input field, in which case these input events may trigger text-changed
         * events from the AtkText interface.  This state supplants `ATK_ROLE_AUTOCOMPLETE`.
         */
        SUPPORTS_AUTOCOMPLETION = 34,
        /**
         * Indicates that the object in question supports text selection. It should only be exposed on objects which implement the Text interface, in order to distinguish this state from `ATK_STATE_SELECTABLE,` which infers that the object in question is a selectable child of an object which implements Selection. While similar, text selection and subelement selection are distinct operations.
         */
        SELECTABLE_TEXT = 35,
        /**
         * Indicates that the object is the "default" active component, i.e. the object which is activated by an end-user press of the "Enter" or "Return" key.  Typically a "close" or "submit" button.
         */
        DEFAULT = 36,
        /**
         * Indicates that the object changes its appearance dynamically as an inherent part of its presentation.  This state may come and go if an object is only temporarily animated on the way to a 'final' onscreen presentation.
         * **note**: some applications, notably content viewers, may not be able to detect
         * all kinds of animated content.  Therefore the absence of this state should not
         * be taken as definitive evidence that the object's visual representation is
         * static; this state is advisory.
         */
        ANIMATED = 37,
        /**
         * Indicates that the object (typically a hyperlink) has already been 'activated', and/or its backing data has already been downloaded, rendered, or otherwise "visited".
         */
        VISITED = 38,
        /**
         * Indicates this object has the potential to be
         *  checked, such as a checkbox or toggle-able table cell. `Since:`
         *  ATK-2.12
         */
        CHECKABLE = 39,
        /**
         * Indicates that the object has a popup context
         * menu or sub-level menu which may or may not be showing. This means
         * that activation renders conditional content.  Note that ordinary
         * tooltips are not considered popups in this context. `Since:` ATK-2.12
         */
        HAS_POPUP = 40,
        /**
         * Indicates this object has a tooltip. `Since:` ATK-2.16
         */
        HAS_TOOLTIP = 41,
        /**
         * Indicates that a widget which is ENABLED and SENSITIVE
         * has a value which can be read, but not modified, by the user. Note that this
         * state should only be applied to widget types whose value is normally directly
         * user modifiable, such as check boxes, radio buttons, spin buttons, text input
         * fields, and combo boxes, as a means to convey that the expected interaction
         * with that widget is not possible. When the expected interaction with a
         * widget does not include modification by the user, as is the case with
         * labels and containers, ATK_STATE_READ_ONLY should not be applied. See also
         * ATK_STATE_EDITABLE. `Since:` ATK-2-16
         */
        READ_ONLY = 42,
        /**
         * Indicates this object is collapsed. `Since:` ATK-2.38
         */
        COLLAPSED = 43,
        /**
         * Not a valid state, used for finding end of enumeration
         */
        LAST_DEFINED = 44,
    }
    /**
     * Describes the text attributes supported
     */
    export namespace TextAttribute {
        export const $gtype: GObject.GType<TextAttribute>;
    }
    enum TextAttribute {
        /**
         * Invalid attribute, like bad spelling or grammar.
         */
        INVALID,
        /**
         * The pixel width of the left margin
         */
        LEFT_MARGIN = 1,
        /**
         * The pixel width of the right margin
         */
        RIGHT_MARGIN = 2,
        /**
         * The number of pixels that the text is indented
         */
        INDENT = 3,
        /**
         * Either "true" or "false" indicating whether text is visible or not
         */
        INVISIBLE = 4,
        /**
         * Either "true" or "false" indicating whether text is editable or not
         */
        EDITABLE = 5,
        /**
         * Pixels of blank space to leave above each newline-terminated line.
         */
        PIXELS_ABOVE_LINES = 6,
        /**
         * Pixels of blank space to leave below each newline-terminated line.
         */
        PIXELS_BELOW_LINES = 7,
        /**
         * Pixels of blank space to leave between wrapped lines inside the same newline-terminated line (paragraph).
         */
        PIXELS_INSIDE_WRAP = 8,
        /**
         * "true" or "false" whether to make the background color for each character the height of the highest font used on the current line, or the height of the font used for the current character.
         */
        BG_FULL_HEIGHT = 9,
        /**
         * Number of pixels that the characters are risen above the baseline. See also ATK_TEXT_ATTR_TEXT_POSITION.
         */
        RISE = 10,
        /**
         * "none", "single", "double", "low", or "error"
         */
        UNDERLINE = 11,
        /**
         * "true" or "false" whether the text is strikethrough
         */
        STRIKETHROUGH = 12,
        /**
         * The size of the characters in points. eg: 10
         */
        SIZE = 13,
        /**
         * The scale of the characters. The value is a string representation of a double
         */
        SCALE = 14,
        /**
         * The weight of the characters.
         */
        WEIGHT = 15,
        /**
         * The language used
         */
        LANGUAGE = 16,
        /**
         * The font family name
         */
        FAMILY_NAME = 17,
        /**
         * The background color. The value is an RGB value of the format "%u,%u,%u"
         */
        BG_COLOR = 18,
        /**
         * The foreground color. The value is an RGB value of the format "%u,%u,%u"
         */
        FG_COLOR = 19,
        /**
         * "true" if a #GdkBitmap is set for stippling the background color.
         */
        BG_STIPPLE = 20,
        /**
         * "true" if a #GdkBitmap is set for stippling the foreground color.
         */
        FG_STIPPLE = 21,
        /**
         * The wrap mode of the text, if any. Values are "none", "char", "word", or "word_char".
         */
        WRAP_MODE = 22,
        /**
         * The direction of the text, if set. Values are "none", "ltr" or "rtl"
         */
        DIRECTION = 23,
        /**
         * The justification of the text, if set. Values are "left", "right", "center" or "fill"
         */
        JUSTIFICATION = 24,
        /**
         * The stretch of the text, if set. Values are "ultra_condensed", "extra_condensed", "condensed", "semi_condensed", "normal", "semi_expanded", "expanded", "extra_expanded" or "ultra_expanded"
         */
        STRETCH = 25,
        /**
         * The capitalization variant of the text, if set. Values are "normal" or "small_caps"
         */
        VARIANT = 26,
        /**
         * The slant style of the text, if set. Values are "normal", "oblique" or "italic"
         */
        STYLE = 27,
        /**
         * The vertical position with respect to the baseline. Values are "baseline", "super", or "sub". Note that a super or sub text attribute refers to position with respect to the baseline of the prior character.
         */
        TEXT_POSITION = 28,
        /**
         * not a valid text attribute, used for finding end of enumeration
         */
        LAST_DEFINED = 29,
    }
    /**
     * Text boundary types used for specifying boundaries for regions of text.
     * This enumeration is deprecated since 2.9.4 and should not be used. Use
     * AtkTextGranularity with #atk_text_get_string_at_offset instead.
     */
    export namespace TextBoundary {
        export const $gtype: GObject.GType<TextBoundary>;
    }
    enum TextBoundary {
        /**
         * Boundary is the boundary between characters
         * (including non-printing characters)
         */
        CHAR,
        /**
         * Boundary is the start (i.e. first character) of a word.
         */
        WORD_START = 1,
        /**
         * Boundary is the end (i.e. last
         * character) of a word.
         */
        WORD_END = 2,
        /**
         * Boundary is the first character in a sentence.
         */
        SENTENCE_START = 3,
        /**
         * Boundary is the last (terminal)
         * character in a sentence; in languages which use "sentence stop"
         * punctuation such as English, the boundary is thus the '.', '?', or
         * similar terminal punctuation character.
         */
        SENTENCE_END = 4,
        /**
         * Boundary is the initial character of the content or a
         * character immediately following a newline, linefeed, or return character.
         */
        LINE_START = 5,
        /**
         * Boundary is the linefeed, or return
         * character.
         */
        LINE_END = 6,
    }
    /**
     * Describes the type of clipping required.
     */
    export namespace TextClipType {
        export const $gtype: GObject.GType<TextClipType>;
    }
    enum TextClipType {
        /**
         * No clipping to be done
         */
        NONE,
        /**
         * Text clipped by min coordinate is omitted
         */
        MIN = 1,
        /**
         * Text clipped by max coordinate is omitted
         */
        MAX = 2,
        /**
         * Only text fully within mix/max bound is retained
         */
        BOTH = 3,
    }
    /**
     * Text granularity types used for specifying the granularity of the region of
     * text we are interested in.
     */
    export namespace TextGranularity {
        export const $gtype: GObject.GType<TextGranularity>;
    }
    enum TextGranularity {
        /**
         * Granularity is defined by the boundaries between characters
         * (including non-printing characters)
         */
        CHAR,
        /**
         * Granularity is defined by the boundaries of a word,
         * starting at the beginning of the current word and finishing at the beginning of
         * the following one, if present.
         */
        WORD = 1,
        /**
         * Granularity is defined by the boundaries of a sentence,
         * starting at the beginning of the current sentence and finishing at the beginning of
         * the following one, if present.
         */
        SENTENCE = 2,
        /**
         * Granularity is defined by the boundaries of a line,
         * starting at the beginning of the current line and finishing at the beginning of
         * the following one, if present.
         */
        LINE = 3,
        /**
         * Granularity is defined by the boundaries of a paragraph,
         * starting at the beginning of the current paragraph and finishing at the beginning of
         * the following one, if present.
         */
        PARAGRAPH = 4,
    }
    /**
     * Default types for a given value. Those are defined in order to
     * easily get localized strings to describe a given value or a given
     * subrange, using atk_value_type_get_localized_name().
     */
    export namespace ValueType {
        export const $gtype: GObject.GType<ValueType>;
    }
    enum ValueType {
        VERY_WEAK,
        WEAK = 1,
        ACCEPTABLE = 2,
        STRONG = 3,
        VERY_STRONG = 4,
        VERY_LOW = 5,
        LOW = 6,
        MEDIUM = 7,
        HIGH = 8,
        VERY_HIGH = 9,
        VERY_BAD = 10,
        BAD = 11,
        GOOD = 12,
        VERY_GOOD = 13,
        BEST = 14,
        LAST_DEFINED = 15,
    }
    /**
     * Like atk_get_binary_age(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const BINARY_AGE: number;
    /**
     * Like atk_get_interface_age(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const INTERFACE_AGE: number;
    /**
     * Like atk_get_major_version(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MAJOR_VERSION: number;
    /**
     * Like atk_get_micro_version(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MICRO_VERSION: number;
    /**
     * Like atk_get_minor_version(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MINOR_VERSION: number;
    /**
     * A macro that should be defined by the user prior to including
     * the atk/atk.h header.
     * The definition should be one of the predefined ATK version
     * macros: %ATK_VERSION_2_12, %ATK_VERSION_2_14,...
     *
     * This macro defines the earliest version of ATK that the package is
     * required to be able to compile against.
     *
     * If the compiler is configured to warn about the use of deprecated
     * functions, then using functions that were deprecated in version
     * %ATK_VERSION_MIN_REQUIRED or earlier will cause warnings (but
     * using functions deprecated in later releases will not).
     */
    const VERSION_MIN_REQUIRED: number;
    /**
     * Frees the memory used by an #AtkAttributeSet, including all its
     * #AtkAttributes.
     *
     * @param attrib_set The #AtkAttributeSet to free
     */
    function attribute_set_free(attrib_set: AttributeSet): void;
    /**
     * Cause the focus tracker functions which have been specified to be
     * executed for the object.
     *
     * @param object an #AtkObject
     */
    function focus_tracker_notify(object: Object): void;
    /**
     * Returns the binary age as passed to libtool when building the ATK
     * library the process is running against.
     *
     * @returns the binary age of the ATK library
     */
    function get_binary_age(): number;
    /**
     * Gets a default implementation of the #AtkObjectFactory/type
     * registry.
     * Note: For most toolkit maintainers, this will be the correct
     * registry for registering new #AtkObject factories. Following
     * a call to this function, maintainers may call atk_registry_set_factory_type()
     * to associate an #AtkObjectFactory subclass with the GType of objects
     * for whom accessibility information will be provided.
     *
     * @returns a default implementation of the
     * #AtkObjectFactory/type registry
     */
    function get_default_registry(): Registry;
    /**
     * Gets the currently focused object.
     *
     * @returns the currently focused object for the current
     * application
     */
    function get_focus_object(): Object;
    /**
     * Returns the interface age as passed to libtool when building the
     * ATK library the process is running against.
     *
     * @returns the interface age of the ATK library
     */
    function get_interface_age(): number;
    /**
     * Returns the major version number of the ATK library.  (e.g. in ATK
     * version 2.7.4 this is 2.)
     *
     * This function is in the library, so it represents the ATK library
     * your code is running against. In contrast, the #ATK_MAJOR_VERSION
     * macro represents the major version of the ATK headers you have
     * included when compiling your code.
     *
     * @returns the major version number of the ATK library
     */
    function get_major_version(): number;
    /**
     * Returns the micro version number of the ATK library.  (e.g. in ATK
     * version 2.7.4 this is 4.)
     *
     * This function is in the library, so it represents the ATK library
     * your code is are running against. In contrast, the
     * #ATK_MICRO_VERSION macro represents the micro version of the ATK
     * headers you have included when compiling your code.
     *
     * @returns the micro version number of the ATK library
     */
    function get_micro_version(): number;
    /**
     * Returns the minor version number of the ATK library.  (e.g. in ATK
     * version 2.7.4 this is 7.)
     *
     * This function is in the library, so it represents the ATK library
     * your code is are running against. In contrast, the
     * #ATK_MINOR_VERSION macro represents the minor version of the ATK
     * headers you have included when compiling your code.
     *
     * @returns the minor version number of the ATK library
     */
    function get_minor_version(): number;
    /**
     * Gets the root accessible container for the current application.
     *
     * @returns the root accessible container for the current
     * application
     */
    function get_root(): Object;
    /**
     * Gets name string for the GUI toolkit implementing ATK for this application.
     *
     * @returns name string for the GUI toolkit implementing ATK for this application
     */
    function get_toolkit_name(): string;
    /**
     * Gets version string for the GUI toolkit implementing ATK for this application.
     *
     * @returns version string for the GUI toolkit implementing ATK for this application
     */
    function get_toolkit_version(): string;
    /**
     * Gets the current version for ATK.
     *
     * @returns version string for ATK
     */
    function get_version(): string;
    /**
     * Get the #AtkRelationType type corresponding to a relation name.
     *
     * @returns the #AtkRelationType enumerated type corresponding to the specified name,
     *          or #ATK_RELATION_NULL if no matching relation type is found.
     * @param name a string which is the (non-localized) name of an ATK relation type.
     */
    function relation_type_for_name(name: string): RelationType;
    /**
     * Gets the description string describing the #AtkRelationType `type`.
     *
     * @returns the string describing the AtkRelationType
     * @param type The #AtkRelationType whose name is required
     */
    function relation_type_get_name(type: RelationType | null): string;
    /**
     * Associate `name` with a new #AtkRelationType
     *
     * @returns an #AtkRelationType associated with `name`
     * @param name a name string
     */
    function relation_type_register(name: string): RelationType;
    /**
     * Removes the specified focus tracker from the list of functions
     * to be called when any object receives focus.
     *
     * @param tracker_id the id of the focus tracker to remove
     */
    function remove_focus_tracker(tracker_id: number): void;
    /**
     * `listener_id` is the value returned by #atk_add_global_event_listener
     * when you registered that event listener.
     *
     * Toolkit implementor note: ATK provides a default implementation for
     * this virtual method. ATK implementors are discouraged from
     * reimplementing this method.
     *
     * Toolkit implementor note: this method is not intended to be used by
     * ATK implementors but by ATK consumers.
     *
     * Removes the specified event listener
     *
     * @param listener_id the id of the event listener to remove
     */
    function remove_global_event_listener(listener_id: number): void;
    /**
     * `listener_id` is the value returned by #atk_add_key_event_listener
     * when you registered that event listener.
     *
     * Removes the specified event listener.
     *
     * @param listener_id the id of the event listener to remove
     */
    function remove_key_event_listener(listener_id: number): void;
    /**
     * Get the #AtkRole type corresponding to a rolew name.
     *
     * @returns the #AtkRole enumerated type corresponding to the specified name,
     *          or #ATK_ROLE_INVALID if no matching role is found.
     * @param name a string which is the (non-localized) name of an ATK role.
     */
    function role_for_name(name: string): Role;
    /**
     * Gets the localized description string describing the #AtkRole `role`.
     *
     * @returns the localized string describing the AtkRole
     * @param role The #AtkRole whose localized name is required
     */
    function role_get_localized_name(role: Role | null): string;
    /**
     * Gets the description string describing the #AtkRole `role`.
     *
     * @returns the string describing the AtkRole
     * @param role The #AtkRole whose name is required
     */
    function role_get_name(role: Role | null): string;
    /**
     * Registers the role specified by `name`. `name` must be a meaningful
     * name. So it should not be empty, or consisting on whitespaces.
     *
     * @returns an #AtkRole for the new role if added
     * properly. ATK_ROLE_INVALID in case of error.
     * @param name a character string describing the new role.
     */
    function role_register(name: string): Role;
    /**
     * Gets the #AtkStateType corresponding to the description string `name`.
     *
     * @returns an #AtkStateType corresponding to `name`
     * @param name a character string state name
     */
    function state_type_for_name(name: string): StateType;
    /**
     * Gets the description string describing the #AtkStateType `type`.
     *
     * @returns the string describing the AtkStateType
     * @param type The #AtkStateType whose name is required
     */
    function state_type_get_name(type: StateType | null): string;
    /**
     * Register a new object state.
     *
     * @returns an #AtkState value for the new state.
     * @param name a character string describing the new state.
     */
    function state_type_register(name: string): StateType;
    /**
     * Get the #AtkTextAttribute type corresponding to a text attribute name.
     *
     * @returns the #AtkTextAttribute enumerated type corresponding to the specified
     *          name, or #ATK_TEXT_ATTRIBUTE_INVALID if no matching text attribute
     *          is found.
     * @param name a string which is the (non-localized) name of an ATK text attribute.
     */
    function text_attribute_for_name(name: string): TextAttribute;
    /**
     * Gets the name corresponding to the #AtkTextAttribute
     *
     * @returns a string containing the name; this string should not be freed
     * @param attr The #AtkTextAttribute whose name is required
     */
    function text_attribute_get_name(attr: TextAttribute | null): string;
    /**
     * Gets the value for the index of the #AtkTextAttribute
     *
     * @returns a string containing the value; this string
     * should not be freed; %NULL is returned if there are no values
     * maintained for the attr value.
     * @param attr The #AtkTextAttribute for which a value is required
     * @param index_ The index of the required value
     */
    function text_attribute_get_value(attr: TextAttribute | null, index_: number): string | null;
    /**
     * Associate `name` with a new #AtkTextAttribute
     *
     * @returns an #AtkTextAttribute associated with `name`
     * @param name a name string
     */
    function text_attribute_register(name: string): TextAttribute;
    /**
     * Frees the memory associated with an array of AtkTextRange. It is assumed
     * that the array was returned by the function atk_text_get_bounded_ranges
     * and is NULL terminated.
     *
     * @param ranges A pointer to an array of #AtkTextRange which is
     *   to be freed.
     */
    function text_free_ranges(ranges: TextRange[]): void;
    /**
     * Gets the localized description string describing the #AtkValueType `value_type`.
     *
     * @returns the localized string describing the #AtkValueType
     * @param value_type The #AtkValueType whose localized name is required
     */
    function value_type_get_localized_name(value_type: ValueType | null): string;
    /**
     * Gets the description string describing the #AtkValueType `value_type`.
     *
     * @returns the string describing the #AtkValueType
     * @param value_type The #AtkValueType whose name is required
     */
    function value_type_get_name(value_type: ValueType | null): string;
    interface EventListener {
        (obj: Object): void;
    }
    interface EventListenerInit {
        (): void;
    }
    interface FocusHandler {
        (object: Object, focus_in: boolean): void;
    }
    interface Function {
        (user_data?: any | null): boolean;
    }
    interface KeySnoopFunc {
        (event: KeyEventStruct): number;
    }
    interface PropertyChangeHandler {
        (obj: Object, vals: PropertyValues): void;
    }
    /**
     * Describes the type of link
     */
    export namespace HyperlinkStateFlags {
        export const $gtype: GObject.GType<HyperlinkStateFlags>;
    }
    enum HyperlinkStateFlags {
        /**
         * Link is inline
         */
        INLINE = 1,
    }
    namespace GObjectAccessible {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::accessible-component-layer'(pspec: GObject.ParamSpec): void;
            'notify::accessible-component-mdi-zorder'(pspec: GObject.ParamSpec): void;
            'notify::accessible-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-help-text'(pspec: GObject.ParamSpec): void;
            'notify::accessible-hypertext-nlinks'(pspec: GObject.ParamSpec): void;
            'notify::accessible-id'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-parent'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption-object'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-summary'(pspec: GObject.ParamSpec): void;
            'notify::accessible-value'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    type GObjectAccessible = (typeof classes.GObjectAccessible)['prototype'];
    const GObjectAccessible: typeof classes.GObjectAccessible &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.GObjectAccessible.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GObjectAccessible.SignalSignatures> & classes.GObjectAccessible);
    namespace Hyperlink {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'link-activated'(): void;
            'notify::end-index'(pspec: GObject.ParamSpec): void;
            'notify::number-of-anchors'(pspec: GObject.ParamSpec): void;
            'notify::selected-link'(pspec: GObject.ParamSpec): void;
            'notify::start-index'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Action.ConstructorProps {
            end_index: number;
            endIndex: number;
            number_of_anchors: number;
            numberOfAnchors: number;
            /**
             * Selected link
             */
            selected_link: boolean;
            /**
             * Selected link
             */
            selectedLink: boolean;
            start_index: number;
            startIndex: number;
        }
    }
    type Hyperlink = (typeof classes.Hyperlink)['prototype'];
    const Hyperlink: typeof classes.Hyperlink &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.Hyperlink.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Hyperlink.SignalSignatures> & classes.Hyperlink);
    namespace Misc {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Misc = (typeof classes.Misc)['prototype'];
    const Misc: typeof classes.Misc &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.Misc.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Misc.SignalSignatures> & classes.Misc);
    namespace NoOpObject {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::accessible-component-layer'(pspec: GObject.ParamSpec): void;
            'notify::accessible-component-mdi-zorder'(pspec: GObject.ParamSpec): void;
            'notify::accessible-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-help-text'(pspec: GObject.ParamSpec): void;
            'notify::accessible-hypertext-nlinks'(pspec: GObject.ParamSpec): void;
            'notify::accessible-id'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-parent'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption-object'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-summary'(pspec: GObject.ParamSpec): void;
            'notify::accessible-value'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Object.ConstructorProps,
                Action.ConstructorProps,
                Component.ConstructorProps,
                Document.ConstructorProps,
                EditableText.ConstructorProps,
                Hypertext.ConstructorProps,
                Image.ConstructorProps,
                Selection.ConstructorProps,
                Table.ConstructorProps,
                TableCell.ConstructorProps,
                Text.ConstructorProps,
                Value.ConstructorProps,
                Window.ConstructorProps {}
    }
    type NoOpObject = (typeof classes.NoOpObject)['prototype'];
    const NoOpObject: typeof classes.NoOpObject &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.NoOpObject.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, NoOpObject.SignalSignatures> & classes.NoOpObject);
    namespace NoOpObjectFactory {
        // Signal signatures
        interface SignalSignatures extends ObjectFactory.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends ObjectFactory.ConstructorProps {}
    }
    type NoOpObjectFactory = (typeof classes.NoOpObjectFactory)['prototype'];
    const NoOpObjectFactory: typeof classes.NoOpObjectFactory &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.NoOpObjectFactory.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, NoOpObjectFactory.SignalSignatures> & classes.NoOpObjectFactory);
    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'active-descendant-changed'(arg0: Object): void;
            announcement(arg0: string): void;
            'attribute-changed'(arg0: string, arg1: string): void;
            'children-changed'(arg0: number, arg1: Object): void;
            'focus-event'(arg0: boolean): void;
            notification(arg0: string, arg1: number): void;
            'property-change'(arg0: PropertyValues): void;
            'state-change'(arg0: string, arg1: boolean): void;
            'visible-data-changed'(): void;
            'notify::accessible-component-layer'(pspec: GObject.ParamSpec): void;
            'notify::accessible-component-mdi-zorder'(pspec: GObject.ParamSpec): void;
            'notify::accessible-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-help-text'(pspec: GObject.ParamSpec): void;
            'notify::accessible-hypertext-nlinks'(pspec: GObject.ParamSpec): void;
            'notify::accessible-id'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-parent'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption-object'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-summary'(pspec: GObject.ParamSpec): void;
            'notify::accessible-value'(pspec: GObject.ParamSpec): void;
            'active-descendant-changed::accessible-component-layer'(arg0: Object): void;
            'active-descendant-changed::accessible-component-mdi-zorder'(arg0: Object): void;
            'active-descendant-changed::accessible-description'(arg0: Object): void;
            'active-descendant-changed::accessible-help-text'(arg0: Object): void;
            'active-descendant-changed::accessible-hypertext-nlinks'(arg0: Object): void;
            'active-descendant-changed::accessible-id'(arg0: Object): void;
            'active-descendant-changed::accessible-name'(arg0: Object): void;
            'active-descendant-changed::accessible-parent'(arg0: Object): void;
            'active-descendant-changed::accessible-role'(arg0: Object): void;
            'active-descendant-changed::accessible-table-caption'(arg0: Object): void;
            'active-descendant-changed::accessible-table-caption-object'(arg0: Object): void;
            'active-descendant-changed::accessible-table-column-description'(arg0: Object): void;
            'active-descendant-changed::accessible-table-column-header'(arg0: Object): void;
            'active-descendant-changed::accessible-table-row-description'(arg0: Object): void;
            'active-descendant-changed::accessible-table-row-header'(arg0: Object): void;
            'active-descendant-changed::accessible-table-summary'(arg0: Object): void;
            'active-descendant-changed::accessible-value'(arg0: Object): void;
            'children-changed::accessible-component-layer'(arg0: number, arg1: Object): void;
            'children-changed::accessible-component-mdi-zorder'(arg0: number, arg1: Object): void;
            'children-changed::accessible-description'(arg0: number, arg1: Object): void;
            'children-changed::accessible-help-text'(arg0: number, arg1: Object): void;
            'children-changed::accessible-hypertext-nlinks'(arg0: number, arg1: Object): void;
            'children-changed::accessible-id'(arg0: number, arg1: Object): void;
            'children-changed::accessible-name'(arg0: number, arg1: Object): void;
            'children-changed::accessible-parent'(arg0: number, arg1: Object): void;
            'children-changed::accessible-role'(arg0: number, arg1: Object): void;
            'children-changed::accessible-table-caption'(arg0: number, arg1: Object): void;
            'children-changed::accessible-table-caption-object'(arg0: number, arg1: Object): void;
            'children-changed::accessible-table-column-description'(arg0: number, arg1: Object): void;
            'children-changed::accessible-table-column-header'(arg0: number, arg1: Object): void;
            'children-changed::accessible-table-row-description'(arg0: number, arg1: Object): void;
            'children-changed::accessible-table-row-header'(arg0: number, arg1: Object): void;
            'children-changed::accessible-table-summary'(arg0: number, arg1: Object): void;
            'children-changed::accessible-value'(arg0: number, arg1: Object): void;
            'property-change::accessible-component-layer'(arg0: PropertyValues): void;
            'property-change::accessible-component-mdi-zorder'(arg0: PropertyValues): void;
            'property-change::accessible-description'(arg0: PropertyValues): void;
            'property-change::accessible-help-text'(arg0: PropertyValues): void;
            'property-change::accessible-hypertext-nlinks'(arg0: PropertyValues): void;
            'property-change::accessible-id'(arg0: PropertyValues): void;
            'property-change::accessible-name'(arg0: PropertyValues): void;
            'property-change::accessible-parent'(arg0: PropertyValues): void;
            'property-change::accessible-role'(arg0: PropertyValues): void;
            'property-change::accessible-table-caption'(arg0: PropertyValues): void;
            'property-change::accessible-table-caption-object'(arg0: PropertyValues): void;
            'property-change::accessible-table-column-description'(arg0: PropertyValues): void;
            'property-change::accessible-table-column-header'(arg0: PropertyValues): void;
            'property-change::accessible-table-row-description'(arg0: PropertyValues): void;
            'property-change::accessible-table-row-header'(arg0: PropertyValues): void;
            'property-change::accessible-table-summary'(arg0: PropertyValues): void;
            'property-change::accessible-value'(arg0: PropertyValues): void;
            'state-change::accessible-component-layer'(arg0: string, arg1: boolean): void;
            'state-change::accessible-component-mdi-zorder'(arg0: string, arg1: boolean): void;
            'state-change::accessible-description'(arg0: string, arg1: boolean): void;
            'state-change::accessible-help-text'(arg0: string, arg1: boolean): void;
            'state-change::accessible-hypertext-nlinks'(arg0: string, arg1: boolean): void;
            'state-change::accessible-id'(arg0: string, arg1: boolean): void;
            'state-change::accessible-name'(arg0: string, arg1: boolean): void;
            'state-change::accessible-parent'(arg0: string, arg1: boolean): void;
            'state-change::accessible-role'(arg0: string, arg1: boolean): void;
            'state-change::accessible-table-caption'(arg0: string, arg1: boolean): void;
            'state-change::accessible-table-caption-object'(arg0: string, arg1: boolean): void;
            'state-change::accessible-table-column-description'(arg0: string, arg1: boolean): void;
            'state-change::accessible-table-column-header'(arg0: string, arg1: boolean): void;
            'state-change::accessible-table-row-description'(arg0: string, arg1: boolean): void;
            'state-change::accessible-table-row-header'(arg0: string, arg1: boolean): void;
            'state-change::accessible-table-summary'(arg0: string, arg1: boolean): void;
            'state-change::accessible-value'(arg0: string, arg1: boolean): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accessible_component_layer: number;
            accessibleComponentLayer: number;
            accessible_component_mdi_zorder: number;
            accessibleComponentMdiZorder: number;
            accessible_description: string;
            accessibleDescription: string;
            accessible_help_text: string;
            accessibleHelpText: string;
            accessible_hypertext_nlinks: number;
            accessibleHypertextNlinks: number;
            accessible_id: string;
            accessibleId: string;
            accessible_name: string;
            accessibleName: string;
            accessible_parent: Object;
            accessibleParent: Object;
            accessible_role: Role;
            accessibleRole: Role;
            /**
             * Table caption.
             */
            accessible_table_caption: string;
            /**
             * Table caption.
             */
            accessibleTableCaption: string;
            accessible_table_caption_object: Object;
            accessibleTableCaptionObject: Object;
            /**
             * Accessible table column description.
             */
            accessible_table_column_description: string;
            /**
             * Accessible table column description.
             */
            accessibleTableColumnDescription: string;
            /**
             * Accessible table column header.
             */
            accessible_table_column_header: Object;
            /**
             * Accessible table column header.
             */
            accessibleTableColumnHeader: Object;
            /**
             * Accessible table row description.
             */
            accessible_table_row_description: string;
            /**
             * Accessible table row description.
             */
            accessibleTableRowDescription: string;
            /**
             * Accessible table row header.
             */
            accessible_table_row_header: Object;
            /**
             * Accessible table row header.
             */
            accessibleTableRowHeader: Object;
            accessible_table_summary: Object;
            accessibleTableSummary: Object;
            /**
             * Numeric value of this object, in case being and AtkValue.
             */
            accessible_value: number;
            /**
             * Numeric value of this object, in case being and AtkValue.
             */
            accessibleValue: number;
        }
    }
    type Object = (typeof classes.Object)['prototype'];
    const Object: typeof classes.Object &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.Object.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Object.SignalSignatures> & classes.Object);
    namespace ObjectFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type ObjectFactory = (typeof classes.ObjectFactory)['prototype'];
    const ObjectFactory: typeof classes.ObjectFactory &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.ObjectFactory.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ObjectFactory.SignalSignatures> & classes.ObjectFactory);
    namespace Plug {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::accessible-component-layer'(pspec: GObject.ParamSpec): void;
            'notify::accessible-component-mdi-zorder'(pspec: GObject.ParamSpec): void;
            'notify::accessible-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-help-text'(pspec: GObject.ParamSpec): void;
            'notify::accessible-hypertext-nlinks'(pspec: GObject.ParamSpec): void;
            'notify::accessible-id'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-parent'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption-object'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-summary'(pspec: GObject.ParamSpec): void;
            'notify::accessible-value'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps, Component.ConstructorProps {}
    }
    type Plug = (typeof classes.Plug)['prototype'];
    const Plug: typeof classes.Plug &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.Plug.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Plug.SignalSignatures> & classes.Plug);
    namespace Registry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Registry = (typeof classes.Registry)['prototype'];
    const Registry: typeof classes.Registry &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.Registry.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Registry.SignalSignatures> & classes.Registry);
    namespace Relation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::relation-type'(pspec: GObject.ParamSpec): void;
            'notify::target'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            relation_type: RelationType;
            relationType: RelationType;
            target: GObject.ValueArray;
        }
    }
    type Relation = (typeof classes.Relation)['prototype'];
    const Relation: typeof classes.Relation &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.Relation.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Relation.SignalSignatures> & classes.Relation);
    namespace RelationSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type RelationSet = (typeof classes.RelationSet)['prototype'];
    const RelationSet: typeof classes.RelationSet &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.RelationSet.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, RelationSet.SignalSignatures> & classes.RelationSet);
    namespace Socket {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::accessible-component-layer'(pspec: GObject.ParamSpec): void;
            'notify::accessible-component-mdi-zorder'(pspec: GObject.ParamSpec): void;
            'notify::accessible-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-help-text'(pspec: GObject.ParamSpec): void;
            'notify::accessible-hypertext-nlinks'(pspec: GObject.ParamSpec): void;
            'notify::accessible-id'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-parent'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption-object'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-summary'(pspec: GObject.ParamSpec): void;
            'notify::accessible-value'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps, Component.ConstructorProps {}
    }
    type Socket = (typeof classes.Socket)['prototype'];
    const Socket: typeof classes.Socket &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.Socket.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Socket.SignalSignatures> & classes.Socket);
    namespace StateSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type StateSet = (typeof classes.StateSet)['prototype'];
    const StateSet: typeof classes.StateSet &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.StateSet.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, StateSet.SignalSignatures> & classes.StateSet);
    namespace Util {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Util = (typeof classes.Util)['prototype'];
    const Util: typeof classes.Util &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Atk.Util.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Util.SignalSignatures> & classes.Util);
    export type ActionIface = typeof Action;
    /**
     * AtkAttribute is a string name/value pair representing a generic
     * attribute. This can be used to expose additional information from
     * an accessible object as a whole (see atk_object_get_attributes())
     * or an document (see atk_document_get_attributes()). In the case of
     * text attributes (see atk_text_get_default_attributes()),
     * #AtkTextAttribute enum defines all the possible text attribute
     * names. You can use atk_text_attribute_get_name() to get the string
     * name from the enum value. See also atk_text_attribute_for_name()
     * and atk_text_attribute_get_value() for more information.
     *
     * A string name/value pair representing a generic attribute.
     */
    class Attribute {
        static '$gtype': GObject.GType<Attribute>;
        // Fields
        name: string;
        value: string;
        // Constructors
        constructor(
            properties?: Partial<{
                name: string;
                value: string;
            }>,
        );
        _init(...args: any[]): void;
        // Static methods
        /**
         * Frees the memory used by an #AtkAttributeSet, including all its
         * #AtkAttributes.
         *
         * @param attrib_set The #AtkAttributeSet to free
         */
        static set_free(attrib_set: AttributeSet): void;
    }
    export type ComponentIface = typeof Component;
    export type DocumentIface = typeof Document;
    export type EditableTextIface = typeof EditableText;
    export type GObjectAccessibleClass = typeof GObjectAccessible;
    export type HyperlinkClass = typeof Hyperlink;
    export type HyperlinkImplIface = typeof HyperlinkImpl;
    export type HypertextIface = typeof Hypertext;
    export type ImageIface = typeof Image;
    abstract class Implementor {
        static '$gtype': GObject.GType<Implementor>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Gets a reference to an object's #AtkObject implementation, if
         * the object implements #AtkObjectIface
         *
         * @returns a reference to an object's #AtkObject
         * implementation
         */
        ref_accessible(): Object;
    }
    /**
     * Encapsulates information about a key event.
     */
    class KeyEventStruct {
        static '$gtype': GObject.GType<KeyEventStruct>;
        // Fields
        type: number;
        state: number;
        keyval: number;
        length: number;
        string: string;
        keycode: number;
        timestamp: number;
        // Constructors
        constructor(
            properties?: Partial<{
                type: number;
                state: number;
                keyval: number;
                length: number;
                string: string;
                keycode: number;
                timestamp: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    export type MiscClass = typeof Misc;
    export type NoOpObjectClass = typeof NoOpObject;
    export type NoOpObjectFactoryClass = typeof NoOpObjectFactory;
    export type ObjectClass = typeof Object;
    export type ObjectFactoryClass = typeof ObjectFactory;
    export type PlugClass = typeof Plug;
    /**
     * Note: `old_value` field of #AtkPropertyValues will not contain a
     * valid value. This is a field defined with the purpose of contain
     * the previous value of the property, but is not used anymore.
     */
    class PropertyValues {
        static '$gtype': GObject.GType<PropertyValues>;
        // Fields
        property_name: string;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A given range or subrange, to be used with #AtkValue
     *
     * #AtkRange are used on #AtkValue, in order to represent the full
     * range of a given component (for example an slider or a range
     * control), or to define each individual subrange this full range is
     * splitted if available. See #AtkValue documentation for further
     * details.
     */
    class Range {
        static '$gtype': GObject.GType<Range>;
        // Constructors
        constructor(lower_limit: number, upper_limit: number, description: string);
        _init(...args: any[]): void;
        static new(lower_limit: number, upper_limit: number, description: string): Range;
        // Methods
        /**
         * Returns a new #AtkRange that is a exact copy of `src`
         *
         * @returns a new #AtkRange copy of `src`
         */
        copy(): Range;
        /**
         * Free `range`
         */
        free(): void;
        /**
         * Returns the human readable description of `range`
         *
         * @returns the human-readable description of `range`
         */
        get_description(): string;
        /**
         * Returns the lower limit of `range`
         *
         * @returns the lower limit of `range`
         */
        get_lower_limit(): number;
        /**
         * Returns the upper limit of `range`
         *
         * @returns the upper limit of `range`
         */
        get_upper_limit(): number;
    }
    /**
     * A data structure for holding a rectangle. Those coordinates are
     * relative to the component top-level parent.
     */
    class Rectangle {
        static '$gtype': GObject.GType<Rectangle>;
        // Fields
        x: number;
        y: number;
        width: number;
        height: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    export type RegistryClass = typeof Registry;
    export type RelationClass = typeof Relation;
    export type RelationSetClass = typeof RelationSet;
    export type SelectionIface = typeof Selection;
    export type SocketClass = typeof Socket;
    export type StateSetClass = typeof StateSet;
    export type StreamableContentIface = typeof StreamableContent;
    export type TableCellIface = typeof TableCell;
    export type TableIface = typeof Table;
    export type TextIface = typeof Text;
    /**
     * A structure used to describe a text range.
     */
    class TextRange {
        static '$gtype': GObject.GType<TextRange>;
        // Fields
        bounds: TextRectangle;
        start_offset: number;
        end_offset: number;
        content: string;
        // Constructors
        constructor(
            properties?: Partial<{
                bounds: TextRectangle;
                start_offset: number;
                end_offset: number;
                content: string;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * A structure used to store a rectangle used by AtkText.
     */
    class TextRectangle {
        static '$gtype': GObject.GType<TextRectangle>;
        // Fields
        x: number;
        y: number;
        width: number;
        height: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * This structure represents a single  text selection within a document. This
     * selection is defined by two points in the content, where each one is defined
     * by an AtkObject supporting the AtkText interface and a character offset
     * relative to it.
     *
     * The end object must appear after the start object in the accessibility tree,
     * i.e. the end object must be reachable from the start object by navigating
     * forward (next, first child etc).
     *
     * This struct also contains a `start_is_active` boolean, to communicate if the
     * start of the selection is the active point or not.
     *
     * The active point corresponds to the user's focus or point of interest. The
     * user moves the active point to expand or collapse the range. The anchor
     * point is the other point of the range and typically remains constant. In
     * most cases, anchor is the start of the range and active is the end. However,
     * when selecting backwards (e.g. pressing shift+left arrow in a text field),
     * the start of the range is the active point, as the user moves this to
     * manipulate the selection.
     */
    class TextSelection {
        static '$gtype': GObject.GType<TextSelection>;
        // Fields
        start_object: Object;
        start_offset: number;
        end_object: Object;
        end_offset: number;
        start_is_active: boolean;
        // Constructors
        _init(...args: any[]): void;
    }
    export type UtilClass = typeof Util;
    export type ValueIface = typeof Value;
    export type WindowIface = typeof Window;
    namespace Action {
        /**
         * Interface for implementing Action.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Perform the specified action on the object.
             *
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             *
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_description(i: number): string | null;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             *
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             *
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             */
            vfunc_get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             *
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_name(i: number): string | null;
            /**
             * Sets a description of the specified action of the object.
             *
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             */
            vfunc_set_description(i: number, desc: string): boolean;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ActionNamespace {
        $gtype: GObject.GType<Action>;
        prototype: Action;
    }
    interface Action extends GObject.Object, Action.Interface {
        // Methods
        /**
         * Perform the specified action on the object.
         *
         * @returns %TRUE if success, %FALSE otherwise
         * @param i the action index corresponding to the action to be performed
         */
        do_action(i: number): boolean;
        /**
         * Returns a description of the specified action of the object.
         *
         * @returns a description string, or %NULL if `action` does
         * not implement this interface.
         * @param i the action index corresponding to the action to be performed
         */
        get_description(i: number): string | null;
        /**
         * Gets the keybinding which can be used to activate this action, if one
         * exists. The string returned should contain localized, human-readable,
         * key sequences as they would appear when displayed on screen. It must
         * be in the format "mnemonic;sequence;shortcut".
         *
         * - The mnemonic key activates the object if it is presently enabled onscreen.
         *   This typically corresponds to the underlined letter within the widget.
         *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
         *   a button.
         * - The sequence is the full list of keys which invoke the action even if the
         *   relevant element is not currently shown on screen. For instance, for a menu
         *   item the sequence is the keybindings used to open the parent menus before
         *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
         *   traditional "New..." menu item.
         * - The shortcut, if it exists, will invoke the same action without showing
         *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
         *   traditional "New..." menu item.
         *
         * Example: For a traditional "New..." menu item, the expected return value
         * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
         * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
         * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
         *
         * @returns the keybinding which can be used to activate
         * this action, or %NULL if there is no keybinding for this action.
         * @param i the action index corresponding to the action to be performed
         */
        get_keybinding(i: number): string | null;
        /**
         * Returns the localized name of the specified action of the object.
         *
         * @returns a name string, or %NULL if `action` does not
         * implement this interface.
         * @param i the action index corresponding to the action to be performed
         */
        get_localized_name(i: number): string | null;
        /**
         * Gets the number of accessible actions available on the object.
         * If there are more than one, the first one is considered the
         * "default" action of the object.
         *
         * @returns a the number of actions, or 0 if `action` does not
         * implement this interface.
         */
        get_n_actions(): number;
        /**
         * Returns a non-localized string naming the specified action of the
         * object. This name is generally not descriptive of the end result
         * of the action, but instead names the 'interaction type' which the
         * object supports. By convention, the above strings should be used to
         * represent the actions which correspond to the common point-and-click
         * interaction techniques of the same name: i.e.
         * "click", "press", "release", "drag", "drop", "popup", etc.
         * The "popup" action should be used to pop up a context menu for the
         * object, if one exists.
         *
         * For technical reasons, some toolkits cannot guarantee that the
         * reported action is actually 'bound' to a nontrivial user event;
         * i.e. the result of some actions via atk_action_do_action() may be
         * NIL.
         *
         * @returns a name string, or %NULL if `action` does not
         * implement this interface.
         * @param i the action index corresponding to the action to be performed
         */
        get_name(i: number): string | null;
        /**
         * Sets a description of the specified action of the object.
         *
         * @returns a gboolean representing if the description was successfully set;
         * @param i the action index corresponding to the action to be performed
         * @param desc the description to be assigned to this action
         */
        set_description(i: number, desc: string): boolean;
    }
    export const Action: ActionNamespace & (new () => Action);
    namespace Component {
        /**
         * Interface for implementing Component.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            vfunc_bounds_changed(bounds: Rectangle): void;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             *
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen
             * or to the components top level window
             */
            vfunc_contains(x: number, y: number, coord_type: CoordType): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             */
            vfunc_get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             *
             * @param coord_type specifies whether the coordinates are relative to the screen
             * or to the components top level window
             */
            vfunc_get_extents(coord_type: CoordType): [number, number, number, number];
            /**
             * Gets the layer of the component.
             */
            vfunc_get_layer(): Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             */
            vfunc_get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             *
             * @param coord_type specifies whether the coordinates are relative to the screen
             * or to the components top level window
             */
            vfunc_get_position(coord_type: CoordType): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            vfunc_get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             *
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen
             * or to the components top level window
             */
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             *
             * @param handler_id the handler id of the focus handler to be removed
             * from `component`
             */
            vfunc_remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             *
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_to(type: ScrollType): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             *
             * @param coords specify whether coordinates are relative to the screen or to the
             * parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             *
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for `component`
             * @param height height to set for `component`
             * @param coord_type specifies whether the coordinates are relative to the screen
             * or to the components top level window
             */
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             *
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen
             * or to the component's top level window
             */
            vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             *
             * @param width width to set for `component`
             * @param height height to set for `component`
             */
            vfunc_set_size(width: number, height: number): boolean;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ComponentNamespace {
        $gtype: GObject.GType<Component>;
        prototype: Component;
    }
    interface Component extends GObject.Object, Component.Interface {
        // Methods
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         *
         * @returns %TRUE or %FALSE indicating whether the specified point is within
         * the extent of the `component` or not
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        contains(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         *
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         *
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        get_extents(coord_type: CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         *
         * @returns an #AtkLayer which is the layer of the component
         */
        get_layer(): Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         *
         * @returns a gint which is the zorder of the component, i.e. the depth at
         * which the component is shown in relation to other components in the same
         * container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         *
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        get_position(coord_type: CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         *
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         *
         * @returns a reference to the accessible
         * child, if one exists
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        ref_accessible_at_point(x: number, y: number, coord_type: CoordType | null): Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         *
         * @param handler_id the handler id of the focus handler to be removed
         * from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         *
         * @returns whether scrolling was successful.
         * @param type specify where the object should be made visible.
         */
        scroll_to(type: ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         *
         * @returns whether scrolling was successful.
         * @param coords specify whether coordinates are relative to the screen or to the
         * parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         */
        scroll_to_point(coords: CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         *
         * @returns %TRUE or %FALSE whether the extents were set or not
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         *
         * @returns %TRUE or %FALSE whether or not the position was set or not
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the component's top level window
         */
        set_position(x: number, y: number, coord_type: CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         *
         * @returns %TRUE or %FALSE whether the size was set or not
         * @param width width to set for `component`
         * @param height height to set for `component`
         */
        set_size(width: number, height: number): boolean;
    }
    export const Component: ComponentNamespace & (new () => Component);
    namespace Document {
        /**
         * Interface for implementing Document.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Retrieves the current page number inside `document`.
             */
            vfunc_get_current_page_number(): number;
            /**
             * Gets a %gpointer that points to an instance of the DOM.  It is
             * up to the caller to check atk_document_get_type to determine
             * how to cast this pointer.
             */
            vfunc_get_document(): any | null;
            /**
             * Retrieves the value of the given `attribute_name` inside `document`.
             *
             * @param attribute_name a character string representing the name of the attribute
             *   whose value is being queried.
             */
            vfunc_get_document_attribute_value(attribute_name: string): string | null;
            /**
             * Gets an AtkAttributeSet which describes document-wide
             *          attributes as name-value pairs.
             */
            vfunc_get_document_attributes(): AttributeSet;
            /**
             * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
             *          of the content of this document instance.  Individual
             *          text substrings or images within this document may have
             *          a different locale, see atk_text_get_attributes and
             *          atk_image_get_image_locale.
             */
            vfunc_get_document_locale(): string;
            /**
             * Gets a string indicating the document type.
             */
            vfunc_get_document_type(): string;
            /**
             * Retrieves the total number of pages inside `document`.
             */
            vfunc_get_page_count(): number;
            /**
             * Returns an array of AtkTextSelections within this document.
             */
            vfunc_get_text_selections(): TextSelection[];
            /**
             * Sets the value for the given `attribute_name` inside `document`.
             *
             * @param attribute_name a character string representing the name of the attribute
             *   whose value is being set.
             * @param attribute_value a string value to be associated with `attribute_name`.
             */
            vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean;
            /**
             * Makes 1 or more selections within this document denoted by the given
             * array of AtkTextSelections. Any existing physical selection (inside or
             * outside this document) is replaced by the new selections. All objects within
             * the given selection ranges must be descendants of this document. Otherwise
             * FALSE will be returned.
             *
             * @param selections a GArray of AtkTextSelections
             *              to be selected.
             */
            vfunc_set_text_selections(selections: TextSelection[]): boolean;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface DocumentNamespace {
        $gtype: GObject.GType<Document>;
        prototype: Document;
    }
    interface Document extends GObject.Object, Document.Interface {
        // Methods
        /**
         * Retrieves the value of the given `attribute_name` inside `document`.
         *
         * @returns a string value associated with the named
         *    attribute for this document, or %NULL if a value for
         *    `attribute_name` has not been specified for this document.
         * @param attribute_name a character string representing the name of the attribute
         *   whose value is being queried.
         */
        get_attribute_value(attribute_name: string): string | null;
        /**
         * Gets an AtkAttributeSet which describes document-wide
         *          attributes as name-value pairs.
         *
         * @returns An AtkAttributeSet containing the explicitly
         *          set name-value-pair attributes associated with this document
         *          as a whole.
         */
        get_attributes(): AttributeSet;
        /**
         * Retrieves the current page number inside `document`.
         *
         * @returns the current page number inside `document,` or -1 if
         *   not implemented, not know by the implementor, or irrelevant.
         */
        get_current_page_number(): number;
        /**
         * Gets a %gpointer that points to an instance of the DOM.  It is
         * up to the caller to check atk_document_get_type to determine
         * how to cast this pointer.
         *
         * @returns a %gpointer that points to an instance of the DOM.
         */
        get_document(): any | null;
        /**
         * Gets a string indicating the document type.
         *
         * @returns a string indicating the document type
         */
        get_document_type(): string;
        /**
         * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
         *          of the content of this document instance.  Individual
         *          text substrings or images within this document may have
         *          a different locale, see atk_text_get_attributes and
         *          atk_image_get_image_locale.
         *
         * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES
         *          locale of the document content as a whole, or NULL if
         *          the document content does not specify a locale.
         */
        get_locale(): string;
        /**
         * Retrieves the total number of pages inside `document`.
         *
         * @returns total page count of `document,` or -1 if not implemented,
         *   not know by the implementor or irrelevant.
         */
        get_page_count(): number;
        /**
         * Returns an array of AtkTextSelections within this document.
         *
         * @returns a GArray of
         * AtkTextSelection structures representing the selection.
         */
        get_text_selections(): TextSelection[];
        /**
         * Sets the value for the given `attribute_name` inside `document`.
         *
         * @returns %TRUE if `attribute_value` is successfully associated
         *   with `attribute_name` for this `document,` and %FALSE if if the
         *   document does not allow the attribute to be modified
         * @param attribute_name a character string representing the name of the attribute
         *   whose value is being set.
         * @param attribute_value a string value to be associated with `attribute_name`.
         */
        set_attribute_value(attribute_name: string, attribute_value: string): boolean;
        /**
         * Makes 1 or more selections within this document denoted by the given
         * array of AtkTextSelections. Any existing physical selection (inside or
         * outside this document) is replaced by the new selections. All objects within
         * the given selection ranges must be descendants of this document. Otherwise
         * FALSE will be returned.
         *
         * @returns TRUE if the selection was made successfully; FALSE otherwise.
         * @param selections a GArray of AtkTextSelections
         *              to be selected.
         */
        set_text_selections(selections: TextSelection[]): boolean;
    }
    export const Document: DocumentNamespace & (new () => Document);
    namespace EditableText {
        /**
         * Interface for implementing EditableText.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Copy text from `start_pos` up to, but not including `end_pos`
             * to the clipboard.
             *
             * @param start_pos start position
             * @param end_pos end position
             */
            vfunc_copy_text(start_pos: number, end_pos: number): void;
            /**
             * Copy text from `start_pos` up to, but not including `end_pos`
             * to the clipboard and then delete from the widget.
             *
             * @param start_pos start position
             * @param end_pos end position
             */
            vfunc_cut_text(start_pos: number, end_pos: number): void;
            /**
             * Delete text `start_pos` up to, but not including `end_pos`.
             *
             * @param start_pos start position
             * @param end_pos end position
             */
            vfunc_delete_text(start_pos: number, end_pos: number): void;
            /**
             * Insert text at a given position.
             *
             * @param string the text to insert
             * @param length the length of text to insert, in bytes
             * @param position The caller initializes this to
             * the position at which to insert the text. After the call it
             * points at the position after the newly inserted text.
             */
            vfunc_insert_text(string: string, length: number, position: number): void;
            /**
             * Paste text from clipboard to specified `position`.
             *
             * @param position position to paste
             */
            vfunc_paste_text(position: number): void;
            /**
             * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
             * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
             * that can be set. Note that other attributes that do not have corresponding
             * ATK_ATTRIBUTE macros may also be set for certain text widgets.
             *
             * @param attrib_set an #AtkAttributeSet
             * @param start_offset start of range in which to set attributes
             * @param end_offset end of range in which to set attributes
             */
            vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
            /**
             * Set text contents of `text`.
             *
             * @param string string to set for text contents of `text`
             */
            vfunc_set_text_contents(string: string): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface EditableTextNamespace {
        $gtype: GObject.GType<EditableText>;
        prototype: EditableText;
    }
    interface EditableText extends GObject.Object, EditableText.Interface {
        // Methods
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard.
         *
         * @param start_pos start position
         * @param end_pos end position
         */
        copy_text(start_pos: number, end_pos: number): void;
        /**
         * Copy text from `start_pos` up to, but not including `end_pos`
         * to the clipboard and then delete from the widget.
         *
         * @param start_pos start position
         * @param end_pos end position
         */
        cut_text(start_pos: number, end_pos: number): void;
        /**
         * Delete text `start_pos` up to, but not including `end_pos`.
         *
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;
        /**
         * Insert text at a given position.
         *
         * @param string the text to insert
         * @param length the length of text to insert, in bytes
         * @param position The caller initializes this to
         * the position at which to insert the text. After the call it
         * points at the position after the newly inserted text.
         */
        insert_text(string: string, length: number, position: number): void;
        /**
         * Paste text from clipboard to specified `position`.
         *
         * @param position position to paste
         */
        paste_text(position: number): void;
        /**
         * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
         * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
         * that can be set. Note that other attributes that do not have corresponding
         * ATK_ATTRIBUTE macros may also be set for certain text widgets.
         *
         * @returns %TRUE if attributes successfully set for the specified
         * range, otherwise %FALSE
         * @param attrib_set an #AtkAttributeSet
         * @param start_offset start of range in which to set attributes
         * @param end_offset end of range in which to set attributes
         */
        set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
        /**
         * Set text contents of `text`.
         *
         * @param string string to set for text contents of `text`
         */
        set_text_contents(string: string): void;
    }
    export const EditableText: EditableTextNamespace & (new () => EditableText);
    namespace HyperlinkImpl {
        /**
         * Interface for implementing HyperlinkImpl.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Gets the hyperlink associated with this object.
             */
            vfunc_get_hyperlink(): Hyperlink;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface HyperlinkImplNamespace {
        $gtype: GObject.GType<HyperlinkImpl>;
        prototype: HyperlinkImpl;
    }
    interface HyperlinkImpl extends GObject.Object, HyperlinkImpl.Interface {
        // Methods
        /**
         * Gets the hyperlink associated with this object.
         *
         * @returns an AtkHyperlink object which points to this
         * implementing AtkObject.
         */
        get_hyperlink(): Hyperlink;
    }
    export const HyperlinkImpl: HyperlinkImplNamespace & (new () => HyperlinkImpl);
    namespace Hypertext {
        /**
         * Interface for implementing Hypertext.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Gets the link in this hypertext document at index
             * `link_index`
             *
             * @param link_index an integer specifying the desired link
             */
            vfunc_get_link(link_index: number): Hyperlink;
            /**
             * Gets the index into the array of hyperlinks that is associated with
             * the character specified by `char_index`.
             *
             * @param char_index a character index
             */
            vfunc_get_link_index(char_index: number): number;
            /**
             * Gets the number of links within this hypertext document.
             */
            vfunc_get_n_links(): number;
            vfunc_link_selected(link_index: number): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface HypertextNamespace {
        $gtype: GObject.GType<Hypertext>;
        prototype: Hypertext;
    }
    interface Hypertext extends GObject.Object, Hypertext.Interface {
        // Methods
        /**
         * Gets the link in this hypertext document at index
         * `link_index`
         *
         * @returns the link in this hypertext document at
         * index `link_index`
         * @param link_index an integer specifying the desired link
         */
        get_link(link_index: number): Hyperlink;
        /**
         * Gets the index into the array of hyperlinks that is associated with
         * the character specified by `char_index`.
         *
         * @returns an index into the array of hyperlinks in `hypertext,`
         * or -1 if there is no hyperlink associated with this character.
         * @param char_index a character index
         */
        get_link_index(char_index: number): number;
        /**
         * Gets the number of links within this hypertext document.
         *
         * @returns the number of links within this hypertext document
         */
        get_n_links(): number;
    }
    export const Hypertext: HypertextNamespace & (new () => Hypertext);
    namespace Image {
        /**
         * Interface for implementing Image.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Get a textual description of this image.
             */
            vfunc_get_image_description(): string;
            /**
             * Retrieves the locale identifier associated to the #AtkImage.
             */
            vfunc_get_image_locale(): string | null;
            /**
             * Gets the position of the image in the form of a point specifying the
             * images top-left corner.
             *
             * If the position can not be obtained (e.g. missing support), x and y are set
             * to -1.
             *
             * @param coord_type specifies whether the coordinates are relative to the screen
             * or to the components top level window
             */
            vfunc_get_image_position(coord_type: CoordType): [number, number];
            /**
             * Get the width and height in pixels for the specified image.
             * The values of `width` and `height` are returned as -1 if the
             * values cannot be obtained (for instance, if the object is not onscreen).
             *
             * If the size can not be obtained (e.g. missing support), x and y are set
             * to -1.
             */
            vfunc_get_image_size(): [number, number];
            /**
             * Sets the textual description for this image.
             *
             * @param description a string description to set for `image`
             */
            vfunc_set_image_description(description: string): boolean;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ImageNamespace {
        $gtype: GObject.GType<Image>;
        prototype: Image;
    }
    interface Image extends GObject.Object, Image.Interface {
        // Methods
        /**
         * Get a textual description of this image.
         *
         * @returns a string representing the image description
         */
        get_image_description(): string;
        /**
         * Retrieves the locale identifier associated to the #AtkImage.
         *
         * @returns a string corresponding to the POSIX
         *   `LC_MESSAGES` locale used by the image description, or
         *   %NULL if the image does not specify a locale.
         */
        get_image_locale(): string | null;
        /**
         * Gets the position of the image in the form of a point specifying the
         * images top-left corner.
         *
         * If the position can not be obtained (e.g. missing support), x and y are set
         * to -1.
         *
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        get_image_position(coord_type: CoordType | null): [number, number];
        /**
         * Get the width and height in pixels for the specified image.
         * The values of `width` and `height` are returned as -1 if the
         * values cannot be obtained (for instance, if the object is not onscreen).
         *
         * If the size can not be obtained (e.g. missing support), x and y are set
         * to -1.
         */
        get_image_size(): [number, number];
        /**
         * Sets the textual description for this image.
         *
         * @returns boolean TRUE, or FALSE if operation could
         * not be completed.
         * @param description a string description to set for `image`
         */
        set_image_description(description: string): boolean;
    }
    export const Image: ImageNamespace & (new () => Image);
    namespace ImplementorIface {
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ImplementorIfaceNamespace {
        $gtype: GObject.GType<ImplementorIface>;
        prototype: ImplementorIface;
    }
    interface ImplementorIface extends GObject.Object {}
    export const ImplementorIface: ImplementorIfaceNamespace & (new () => ImplementorIface);
    namespace Selection {
        /**
         * Interface for implementing Selection.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Adds the specified accessible child of the object to the
             * object's selection.
             *
             * @param i a #gint specifying the child index.
             */
            vfunc_add_selection(i: number): boolean;
            /**
             * Clears the selection in the object so that no children in the object
             * are selected.
             */
            vfunc_clear_selection(): boolean;
            /**
             * Gets the number of accessible children currently selected.
             * Note: callers should not rely on %NULL or on a zero value for
             * indication of whether AtkSelectionIface is implemented, they should
             * use type checking/interface checking macros or the
             * atk_get_accessible_value() convenience method.
             */
            vfunc_get_selection_count(): number;
            /**
             * Determines if the current child of this object is selected
             * Note: callers should not rely on %NULL or on a zero value for
             * indication of whether AtkSelectionIface is implemented, they should
             * use type checking/interface checking macros or the
             * atk_get_accessible_value() convenience method.
             *
             * @param i a #gint specifying the child index.
             */
            vfunc_is_child_selected(i: number): boolean;
            /**
             * Gets a reference to the accessible object representing the specified
             * selected child of the object.
             * Note: callers should not rely on %NULL or on a zero value for
             * indication of whether AtkSelectionIface is implemented, they should
             * use type checking/interface checking macros or the
             * atk_get_accessible_value() convenience method.
             *
             * @param i a #gint specifying the index in the selection set.  (e.g. the
             * ith selection as opposed to the ith child).
             */
            vfunc_ref_selection(i: number): Object | null;
            /**
             * Removes the specified child of the object from the object's selection.
             *
             * @param i a #gint specifying the index in the selection set.  (e.g. the
             * ith selection as opposed to the ith child).
             */
            vfunc_remove_selection(i: number): boolean;
            /**
             * Causes every child of the object to be selected if the object
             * supports multiple selections.
             */
            vfunc_select_all_selection(): boolean;
            vfunc_selection_changed(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface SelectionNamespace {
        $gtype: GObject.GType<Selection>;
        prototype: Selection;
    }
    interface Selection extends GObject.Object, Selection.Interface {
        // Methods
        /**
         * Adds the specified accessible child of the object to the
         * object's selection.
         *
         * @returns TRUE if success, FALSE otherwise.
         * @param i a #gint specifying the child index.
         */
        add_selection(i: number): boolean;
        /**
         * Clears the selection in the object so that no children in the object
         * are selected.
         *
         * @returns TRUE if success, FALSE otherwise.
         */
        clear_selection(): boolean;
        /**
         * Gets the number of accessible children currently selected.
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         *
         * @returns a gint representing the number of items selected, or 0
         * if `selection` does not implement this interface.
         */
        get_selection_count(): number;
        /**
         * Determines if the current child of this object is selected
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         *
         * @returns a gboolean representing the specified child is selected, or 0
         * if `selection` does not implement this interface.
         * @param i a #gint specifying the child index.
         */
        is_child_selected(i: number): boolean;
        /**
         * Gets a reference to the accessible object representing the specified
         * selected child of the object.
         * Note: callers should not rely on %NULL or on a zero value for
         * indication of whether AtkSelectionIface is implemented, they should
         * use type checking/interface checking macros or the
         * atk_get_accessible_value() convenience method.
         *
         * @returns an #AtkObject representing the
         * selected accessible, or %NULL if `selection` does not implement this
         * interface.
         * @param i a #gint specifying the index in the selection set.  (e.g. the
         * ith selection as opposed to the ith child).
         */
        ref_selection(i: number): Object | null;
        /**
         * Removes the specified child of the object from the object's selection.
         *
         * @returns TRUE if success, FALSE otherwise.
         * @param i a #gint specifying the index in the selection set.  (e.g. the
         * ith selection as opposed to the ith child).
         */
        remove_selection(i: number): boolean;
        /**
         * Causes every child of the object to be selected if the object
         * supports multiple selections.
         *
         * @returns TRUE if success, FALSE otherwise.
         */
        select_all_selection(): boolean;
    }
    export const Selection: SelectionNamespace & (new () => Selection);
    namespace StreamableContent {
        /**
         * Interface for implementing StreamableContent.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Gets the character string of the specified mime type. The first mime
             * type is at position 0, the second at position 1, and so on.
             *
             * @param i a gint representing the position of the mime type starting from 0
             */
            vfunc_get_mime_type(i: number): string;
            /**
             * Gets the number of mime types supported by this object.
             */
            vfunc_get_n_mime_types(): number;
            /**
             * Gets the content in the specified mime type.
             *
             * @param mime_type a gchar* representing the mime type
             */
            vfunc_get_stream(mime_type: string): GLib.IOChannel;
            /**
             * Get a string representing a URI in IETF standard format
             * (see http://www.ietf.org/rfc/rfc2396.txt) from which the object's content
             * may be streamed in the specified mime-type, if one is available.
             * If mime_type is NULL, the URI for the default (and possibly only) mime-type is
             * returned.
             *
             * Note that it is possible for get_uri to return NULL but for
             * get_stream to work nonetheless, since not all GIOChannels connect to URIs.
             *
             * @param mime_type a gchar* representing the mime type, or NULL to request a URI
             * for the default mime type.
             */
            vfunc_get_uri(mime_type: string): string | null;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface StreamableContentNamespace {
        $gtype: GObject.GType<StreamableContent>;
        prototype: StreamableContent;
    }
    interface StreamableContent extends GObject.Object, StreamableContent.Interface {
        // Methods
        /**
         * Gets the character string of the specified mime type. The first mime
         * type is at position 0, the second at position 1, and so on.
         *
         * @returns a gchar* representing the specified mime type; the caller
         * should not free the character string.
         * @param i a gint representing the position of the mime type starting from 0
         */
        get_mime_type(i: number): string;
        /**
         * Gets the number of mime types supported by this object.
         *
         * @returns a gint which is the number of mime types supported by the object.
         */
        get_n_mime_types(): number;
        /**
         * Gets the content in the specified mime type.
         *
         * @returns A #GIOChannel which contains the content in the
         * specified mime type.
         * @param mime_type a gchar* representing the mime type
         */
        get_stream(mime_type: string): GLib.IOChannel;
        /**
         * Get a string representing a URI in IETF standard format
         * (see http://www.ietf.org/rfc/rfc2396.txt) from which the object's content
         * may be streamed in the specified mime-type, if one is available.
         * If mime_type is NULL, the URI for the default (and possibly only) mime-type is
         * returned.
         *
         * Note that it is possible for get_uri to return NULL but for
         * get_stream to work nonetheless, since not all GIOChannels connect to URIs.
         *
         * @returns Returns a string representing a URI, or %NULL
         * if no corresponding URI can be constructed.
         * @param mime_type a gchar* representing the mime type, or NULL to request a URI
         * for the default mime type.
         */
        get_uri(mime_type: string): string | null;
    }
    export const StreamableContent: StreamableContentNamespace & (new () => StreamableContent);
    namespace Table {
        /**
         * Interface for implementing Table.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Adds the specified `column` to the selection.
             *
             * @param column a #gint representing a column in `table`
             */
            vfunc_add_column_selection(column: number): boolean;
            /**
             * Adds the specified `row` to the selection.
             *
             * @param row a #gint representing a row in `table`
             */
            vfunc_add_row_selection(row: number): boolean;
            vfunc_column_deleted(column: number, num_deleted: number): void;
            vfunc_column_inserted(column: number, num_inserted: number): void;
            vfunc_column_reordered(): void;
            /**
             * Gets the caption for the `table`.
             */
            vfunc_get_caption(): Object | null;
            /**
             * Gets a #gint representing the column at the specified `index_`.
             *
             * @param index_ a #gint representing an index in `table`
             */
            vfunc_get_column_at_index(index_: number): number;
            /**
             * Gets the description text of the specified `column` in the table
             *
             * @param column a #gint representing a column in `table`
             */
            vfunc_get_column_description(column: number): string;
            /**
             * Gets the number of columns occupied by the accessible object
             * at the specified `row` and `column` in the `table`.
             *
             * @param row a #gint representing a row in `table`
             * @param column a #gint representing a column in `table`
             */
            vfunc_get_column_extent_at(row: number, column: number): number;
            /**
             * Gets the column header of a specified column in an accessible table.
             *
             * @param column a #gint representing a column in the table
             */
            vfunc_get_column_header(column: number): Object | null;
            /**
             * Gets a #gint representing the index at the specified `row` and
             * `column`.
             *
             * @param row a #gint representing a row in `table`
             * @param column a #gint representing a column in `table`
             */
            vfunc_get_index_at(row: number, column: number): number;
            /**
             * Gets the number of columns in the table.
             */
            vfunc_get_n_columns(): number;
            /**
             * Gets the number of rows in the table.
             */
            vfunc_get_n_rows(): number;
            /**
             * Gets a #gint representing the row at the specified `index_`.
             *
             * @param index_ a #gint representing an index in `table`
             */
            vfunc_get_row_at_index(index_: number): number;
            /**
             * Gets the description text of the specified row in the table
             *
             * @param row a #gint representing a row in `table`
             */
            vfunc_get_row_description(row: number): string | null;
            /**
             * Gets the number of rows occupied by the accessible object
             * at a specified `row` and `column` in the `table`.
             *
             * @param row a #gint representing a row in `table`
             * @param column a #gint representing a column in `table`
             */
            vfunc_get_row_extent_at(row: number, column: number): number;
            /**
             * Gets the row header of a specified row in an accessible table.
             *
             * @param row a #gint representing a row in the table
             */
            vfunc_get_row_header(row: number): Object | null;
            /**
             * Gets the selected columns of the table by initializing **selected with
             * the selected column numbers. This array should be freed by the caller.
             *
             * @param selected a #gint** that is to contain the selected columns numbers
             */
            vfunc_get_selected_columns(selected: number): number;
            /**
             * Gets the selected rows of the table by initializing **selected with
             * the selected row numbers. This array should be freed by the caller.
             *
             * @param selected a #gint** that is to contain the selected row numbers
             */
            vfunc_get_selected_rows(selected: number): number;
            /**
             * Gets the summary description of the table.
             */
            vfunc_get_summary(): Object;
            /**
             * Gets a boolean value indicating whether the specified `column`
             * is selected
             *
             * @param column a #gint representing a column in `table`
             */
            vfunc_is_column_selected(column: number): boolean;
            /**
             * Gets a boolean value indicating whether the specified `row`
             * is selected
             *
             * @param row a #gint representing a row in `table`
             */
            vfunc_is_row_selected(row: number): boolean;
            /**
             * Gets a boolean value indicating whether the accessible object
             * at the specified `row` and `column` is selected
             *
             * @param row a #gint representing a row in `table`
             * @param column a #gint representing a column in `table`
             */
            vfunc_is_selected(row: number, column: number): boolean;
            vfunc_model_changed(): void;
            /**
             * Get a reference to the table cell at `row,` `column`. This cell
             * should implement the interface #AtkTableCell
             *
             * @param row a #gint representing a row in `table`
             * @param column a #gint representing a column in `table`
             */
            vfunc_ref_at(row: number, column: number): Object;
            /**
             * Adds the specified `column` to the selection.
             *
             * @param column a #gint representing a column in `table`
             */
            vfunc_remove_column_selection(column: number): boolean;
            /**
             * Removes the specified `row` from the selection.
             *
             * @param row a #gint representing a row in `table`
             */
            vfunc_remove_row_selection(row: number): boolean;
            vfunc_row_deleted(row: number, num_deleted: number): void;
            vfunc_row_inserted(row: number, num_inserted: number): void;
            vfunc_row_reordered(): void;
            /**
             * Sets the caption for the table.
             *
             * @param caption a #AtkObject representing the caption to set for `table`
             */
            vfunc_set_caption(caption: Object): void;
            /**
             * Sets the description text for the specified `column` of the `table`.
             *
             * @param column a #gint representing a column in `table`
             * @param description a #gchar representing the description text
             * to set for the specified `column` of the `table`
             */
            vfunc_set_column_description(column: number, description: string): void;
            /**
             * Sets the specified column header to `header`.
             *
             * @param column a #gint representing a column in `table`
             * @param header an #AtkTable
             */
            vfunc_set_column_header(column: number, header: Object): void;
            /**
             * Sets the description text for the specified `row` of `table`.
             *
             * @param row a #gint representing a row in `table`
             * @param description a #gchar representing the description text
             * to set for the specified `row` of `table`
             */
            vfunc_set_row_description(row: number, description: string): void;
            /**
             * Sets the specified row header to `header`.
             *
             * @param row a #gint representing a row in `table`
             * @param header an #AtkTable
             */
            vfunc_set_row_header(row: number, header: Object): void;
            /**
             * Sets the summary description of the table.
             *
             * @param accessible an #AtkObject representing the summary description
             * to set for `table`
             */
            vfunc_set_summary(accessible: Object): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface TableNamespace {
        $gtype: GObject.GType<Table>;
        prototype: Table;
    }
    interface Table extends GObject.Object, Table.Interface {
        // Methods
        /**
         * Adds the specified `column` to the selection.
         *
         * @returns a gboolean representing if the column was successfully added to
         * the selection, or 0 if value does not implement this interface.
         * @param column a #gint representing a column in `table`
         */
        add_column_selection(column: number): boolean;
        /**
         * Adds the specified `row` to the selection.
         *
         * @returns a gboolean representing if row was successfully added to selection,
         * or 0 if value does not implement this interface.
         * @param row a #gint representing a row in `table`
         */
        add_row_selection(row: number): boolean;
        /**
         * Gets the caption for the `table`.
         *
         * @returns a AtkObject* representing the
         * table caption, or %NULL if value does not implement this interface.
         */
        get_caption(): Object | null;
        /**
         * Gets a #gint representing the column at the specified `index_`.
         *
         * @returns a gint representing the column at the specified index,
         * or -1 if the table does not implement this method.
         * @param index_ a #gint representing an index in `table`
         */
        get_column_at_index(index_: number): number;
        /**
         * Gets the description text of the specified `column` in the table
         *
         * @returns a gchar* representing the column description, or %NULL
         * if value does not implement this interface.
         * @param column a #gint representing a column in `table`
         */
        get_column_description(column: number): string;
        /**
         * Gets the number of columns occupied by the accessible object
         * at the specified `row` and `column` in the `table`.
         *
         * @returns a gint representing the column extent at specified position, or 0
         * if value does not implement this interface.
         * @param row a #gint representing a row in `table`
         * @param column a #gint representing a column in `table`
         */
        get_column_extent_at(row: number, column: number): number;
        /**
         * Gets the column header of a specified column in an accessible table.
         *
         * @returns a AtkObject* representing the
         * specified column header, or %NULL if value does not implement this
         * interface.
         * @param column a #gint representing a column in the table
         */
        get_column_header(column: number): Object | null;
        /**
         * Gets a #gint representing the index at the specified `row` and
         * `column`.
         *
         * @returns a #gint representing the index at specified position.
         * The value -1 is returned if the object at row,column is not a child
         * of table or table does not implement this interface.
         * @param row a #gint representing a row in `table`
         * @param column a #gint representing a column in `table`
         */
        get_index_at(row: number, column: number): number;
        /**
         * Gets the number of columns in the table.
         *
         * @returns a gint representing the number of columns, or 0
         * if value does not implement this interface.
         */
        get_n_columns(): number;
        /**
         * Gets the number of rows in the table.
         *
         * @returns a gint representing the number of rows, or 0
         * if value does not implement this interface.
         */
        get_n_rows(): number;
        /**
         * Gets a #gint representing the row at the specified `index_`.
         *
         * @returns a gint representing the row at the specified index,
         * or -1 if the table does not implement this method.
         * @param index_ a #gint representing an index in `table`
         */
        get_row_at_index(index_: number): number;
        /**
         * Gets the description text of the specified row in the table
         *
         * @returns a gchar* representing the row description, or
         * %NULL if value does not implement this interface.
         * @param row a #gint representing a row in `table`
         */
        get_row_description(row: number): string | null;
        /**
         * Gets the number of rows occupied by the accessible object
         * at a specified `row` and `column` in the `table`.
         *
         * @returns a gint representing the row extent at specified position, or 0
         * if value does not implement this interface.
         * @param row a #gint representing a row in `table`
         * @param column a #gint representing a column in `table`
         */
        get_row_extent_at(row: number, column: number): number;
        /**
         * Gets the row header of a specified row in an accessible table.
         *
         * @returns a AtkObject* representing the
         * specified row header, or %NULL if value does not implement this
         * interface.
         * @param row a #gint representing a row in the table
         */
        get_row_header(row: number): Object | null;
        /**
         * Gets the selected columns of the table by initializing **selected with
         * the selected column numbers. This array should be freed by the caller.
         *
         * @returns a gint representing the number of selected columns,
         * or %0 if value does not implement this interface.
         * @param selected a #gint** that is to contain the selected columns numbers
         */
        get_selected_columns(selected: number): number;
        /**
         * Gets the selected rows of the table by initializing **selected with
         * the selected row numbers. This array should be freed by the caller.
         *
         * @returns a gint representing the number of selected rows,
         * or zero if value does not implement this interface.
         * @param selected a #gint** that is to contain the selected row numbers
         */
        get_selected_rows(selected: number): number;
        /**
         * Gets the summary description of the table.
         *
         * @returns a AtkObject* representing a summary description
         * of the table, or zero if value does not implement this interface.
         */
        get_summary(): Object;
        /**
         * Gets a boolean value indicating whether the specified `column`
         * is selected
         *
         * @returns a gboolean representing if the column is selected, or 0
         * if value does not implement this interface.
         * @param column a #gint representing a column in `table`
         */
        is_column_selected(column: number): boolean;
        /**
         * Gets a boolean value indicating whether the specified `row`
         * is selected
         *
         * @returns a gboolean representing if the row is selected, or 0
         * if value does not implement this interface.
         * @param row a #gint representing a row in `table`
         */
        is_row_selected(row: number): boolean;
        /**
         * Gets a boolean value indicating whether the accessible object
         * at the specified `row` and `column` is selected
         *
         * @returns a gboolean representing if the cell is selected, or 0
         * if value does not implement this interface.
         * @param row a #gint representing a row in `table`
         * @param column a #gint representing a column in `table`
         */
        is_selected(row: number, column: number): boolean;
        /**
         * Get a reference to the table cell at `row,` `column`. This cell
         * should implement the interface #AtkTableCell
         *
         * @returns an #AtkObject representing the referred
         * to accessible
         * @param row a #gint representing a row in `table`
         * @param column a #gint representing a column in `table`
         */
        ref_at(row: number, column: number): Object;
        /**
         * Adds the specified `column` to the selection.
         *
         * @returns a gboolean representing if the column was successfully removed from
         * the selection, or 0 if value does not implement this interface.
         * @param column a #gint representing a column in `table`
         */
        remove_column_selection(column: number): boolean;
        /**
         * Removes the specified `row` from the selection.
         *
         * @returns a gboolean representing if the row was successfully removed from
         * the selection, or 0 if value does not implement this interface.
         * @param row a #gint representing a row in `table`
         */
        remove_row_selection(row: number): boolean;
        /**
         * Sets the caption for the table.
         *
         * @param caption a #AtkObject representing the caption to set for `table`
         */
        set_caption(caption: Object): void;
        /**
         * Sets the description text for the specified `column` of the `table`.
         *
         * @param column a #gint representing a column in `table`
         * @param description a #gchar representing the description text
         * to set for the specified `column` of the `table`
         */
        set_column_description(column: number, description: string): void;
        /**
         * Sets the specified column header to `header`.
         *
         * @param column a #gint representing a column in `table`
         * @param header an #AtkTable
         */
        set_column_header(column: number, header: Object): void;
        /**
         * Sets the description text for the specified `row` of `table`.
         *
         * @param row a #gint representing a row in `table`
         * @param description a #gchar representing the description text
         * to set for the specified `row` of `table`
         */
        set_row_description(row: number, description: string): void;
        /**
         * Sets the specified row header to `header`.
         *
         * @param row a #gint representing a row in `table`
         * @param header an #AtkTable
         */
        set_row_header(row: number, header: Object): void;
        /**
         * Sets the summary description of the table.
         *
         * @param accessible an #AtkObject representing the summary description
         * to set for `table`
         */
        set_summary(accessible: Object): void;
    }
    export const Table: TableNamespace & (new () => Table);
    namespace TableCell {
        /**
         * Interface for implementing TableCell.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Returns the column headers as an array of cell accessibles.
             */
            vfunc_get_column_header_cells(): Object[];
            /**
             * Returns the number of columns occupied by this cell accessible.
             */
            vfunc_get_column_span(): number;
            /**
             * Retrieves the tabular position of this cell.
             */
            vfunc_get_position(): [boolean, number, number];
            /**
             * Gets the row and column indexes and span of this cell accessible.
             *
             * Note: If the object does not implement this function, then, by default, atk
             * will implement this function by calling get_row_span and get_column_span
             * on the object.
             */
            vfunc_get_row_column_span(): [boolean, number, number, number, number];
            /**
             * Returns the row headers as an array of cell accessibles.
             */
            vfunc_get_row_header_cells(): Object[];
            /**
             * Returns the number of rows occupied by this cell accessible.
             */
            vfunc_get_row_span(): number;
            /**
             * Returns a reference to the accessible of the containing table.
             */
            vfunc_get_table(): Object;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    export interface TableCellNamespace {
        $gtype: GObject.GType<TableCell>;
        prototype: TableCell;
    }
    interface TableCell extends Object, TableCell.Interface {
        // Methods
        /**
         * Returns the column headers as an array of cell accessibles.
         *
         * @returns a GPtrArray of AtkObjects
         * representing the column header cells.
         */
        get_column_header_cells(): Object[];
        /**
         * Returns the number of columns occupied by this cell accessible.
         *
         * @returns a gint representing the number of columns occupied by this cell,
         * or 0 if the cell does not implement this method.
         */
        get_column_span(): number;
        /**
         * Retrieves the tabular position of this cell.
         *
         * @returns TRUE if successful; FALSE otherwise.
         */
        get_position(): [boolean, number, number];
        /**
         * Gets the row and column indexes and span of this cell accessible.
         *
         * Note: If the object does not implement this function, then, by default, atk
         * will implement this function by calling get_row_span and get_column_span
         * on the object.
         *
         * @returns TRUE if successful; FALSE otherwise.
         */
        get_row_column_span(): [boolean, number, number, number, number];
        /**
         * Returns the row headers as an array of cell accessibles.
         *
         * @returns a GPtrArray of AtkObjects
         * representing the row header cells.
         */
        get_row_header_cells(): Object[];
        /**
         * Returns the number of rows occupied by this cell accessible.
         *
         * @returns a gint representing the number of rows occupied by this cell,
         * or 0 if the cell does not implement this method.
         */
        get_row_span(): number;
        /**
         * Returns a reference to the accessible of the containing table.
         *
         * @returns the atk object for the containing table.
         */
        get_table(): Object;
    }
    export const TableCell: TableCellNamespace & (new () => TableCell);
    namespace Text {
        /**
         * Interface for implementing Text.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Adds a selection bounded by the specified offsets.
             *
             * @param start_offset the starting character offset of the selected region
             * @param end_offset the offset of the first character after the selected region.
             */
            vfunc_add_selection(start_offset: number, end_offset: number): boolean;
            /**
             * Get the ranges of text in the specified bounding box.
             *
             * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
             * @param coord_type Specify whether coordinates are relative to the screen or widget window.
             * @param x_clip_type Specify the horizontal clip type.
             * @param y_clip_type Specify the vertical clip type.
             */
            vfunc_get_bounded_ranges(
                rect: TextRectangle,
                coord_type: CoordType,
                x_clip_type: TextClipType,
                y_clip_type: TextClipType,
            ): TextRange[];
            /**
             * Gets the offset of the position of the caret (cursor).
             */
            vfunc_get_caret_offset(): number;
            /**
             * Gets the specified text.
             *
             * @param offset a character offset within `text`
             */
            vfunc_get_character_at_offset(offset: number): string;
            /**
             * Gets the character count.
             */
            vfunc_get_character_count(): number;
            /**
             * If the extent can not be obtained (e.g. missing support), all of x, y, width,
             * height are set to -1.
             *
             * Get the bounding box containing the glyph representing the character at
             *     a particular text offset.
             *
             * @param offset The offset of the text character for which bounding information is required.
             * @param coords specify whether coordinates are relative to the screen or widget window
             */
            vfunc_get_character_extents(offset: number, coords: CoordType): [number, number, number, number];
            /**
             * Creates an #AtkAttributeSet which consists of the default values of
             * attributes for the text. See the enum AtkTextAttribute for types of text
             * attributes that can be returned. Note that other attributes may also be
             * returned.
             */
            vfunc_get_default_attributes(): AttributeSet;
            /**
             * Gets the number of selected regions.
             */
            vfunc_get_n_selections(): number;
            /**
             * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
             * are interpreted as being relative to the screen or this widget's window
             * depending on `coords`.
             *
             * @param x screen x-position of character
             * @param y screen y-position of character
             * @param coords specify whether coordinates are relative to the screen or
             * widget window
             */
            vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number;
            /**
             * Get the bounding box for text within the specified range.
             *
             * If the extents can not be obtained (e.g. or missing support), the rectangle
             * fields are set to -1.
             *
             * @param start_offset The offset of the first text character for which boundary
             *        information is required.
             * @param end_offset The offset of the text character after the last character
             *        for which boundary information is required.
             * @param coord_type Specify whether coordinates are relative to the screen or widget window.
             */
            vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): [TextRectangle];
            /**
             * Creates an #AtkAttributeSet which consists of the attributes explicitly
             * set at the position `offset` in the text. `start_offset` and `end_offset` are
             * set to the start and end of the range around `offset` where the attributes are
             * invariant. Note that `end_offset` is the offset of the first character
             * after the range.  See the enum AtkTextAttribute for types of text
             * attributes that can be returned. Note that other attributes may also be
             * returned.
             *
             * @param offset the character offset at which to get the attributes, -1 means the offset of
             * the character to be inserted at the caret location.
             */
            vfunc_get_run_attributes(offset: number): [AttributeSet, number, number];
            /**
             * Gets the text from the specified selection.
             *
             * @param selection_num The selection number.  The selected regions are
             * assigned numbers that correspond to how far the region is from the
             * start of the text.  The selected region closest to the beginning
             * of the text region is assigned the number 0, etc.  Note that adding,
             * moving or deleting a selected region can change the numbering.
             */
            vfunc_get_selection(selection_num: number): [string, number, number];
            /**
             * Gets a portion of the text exposed through an #AtkText according to a given `offset`
             * and a specific `granularity,` along with the start and end offsets defining the
             * boundaries of such a portion of text.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
             * offset is returned.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
             * is from the word start at or before the offset to the word start after
             * the offset.
             *
             * The returned string will contain the word at the offset if the offset
             * is inside a word and will contain the word before the offset if the
             * offset is not inside a word.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
             * is from the sentence start at or before the offset to the sentence
             * start after the offset.
             *
             * The returned string will contain the sentence at the offset if the offset
             * is inside a sentence and will contain the sentence before the offset
             * if the offset is not inside a sentence.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
             * is from the line start at or before the offset to the line
             * start after the offset.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
             * is from the start of the paragraph at or before the offset to the start
             * of the following paragraph after the offset.
             *
             * @param offset position
             * @param granularity An #AtkTextGranularity
             */
            vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number, number];
            /**
             * Gets the specified text.
             *
             * @param start_offset a starting character offset within `text`
             * @param end_offset an ending character offset within `text,` or -1 for the end of the string.
             */
            vfunc_get_text(start_offset: number, end_offset: number): string;
            /**
             * Gets the specified text.
             *
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             */
            vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            /**
             * Gets the specified text.
             *
             * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
             * offset is returned.
             *
             * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
             * is from the word start at or before the offset to the word start after
             * the offset.
             *
             * The returned string will contain the word at the offset if the offset
             * is inside a word and will contain the word before the offset if the
             * offset is not inside a word.
             *
             * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
             * string is from the sentence start at or before the offset to the sentence
             * start after the offset.
             *
             * The returned string will contain the sentence at the offset if the offset
             * is inside a sentence and will contain the sentence before the offset
             * if the offset is not inside a sentence.
             *
             * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
             * string is from the line start at or before the offset to the line
             * start after the offset.
             *
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             */
            vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            /**
             * Gets the specified text.
             *
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             */
            vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number, number];
            /**
             * Removes the specified selection.
             *
             * @param selection_num The selection number.  The selected regions are
             * assigned numbers that correspond to how far the region is from the
             * start of the text.  The selected region closest to the beginning
             * of the text region is assigned the number 0, etc.  Note that adding,
             * moving or deleting a selected region can change the numbering.
             */
            vfunc_remove_selection(selection_num: number): boolean;
            /**
             * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
             *
             * @param start_offset start offset in the `text`
             * @param end_offset end offset in the `text,` or -1 for the end of the text.
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
            /**
             * Move the top-left of a substring of `text` to a given position of the screen
             * by scrolling all necessary parents.
             *
             * @param start_offset start offset in the `text`
             * @param end_offset end offset in the `text,` or -1 for the end of the text.
             * @param coords specify whether coordinates are relative to the screen or to the
             * parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_substring_to_point(
                start_offset: number,
                end_offset: number,
                coords: CoordType,
                x: number,
                y: number,
            ): boolean;
            /**
             * Sets the caret (cursor) position to the specified `offset`.
             *
             * In the case of rich-text content, this method should either grab focus
             * or move the sequential focus navigation starting point (if the application
             * supports this concept) as if the user had clicked on the new caret position.
             * Typically, this means that the target of this operation is the node containing
             * the new caret position or one of its ancestors. In other words, after this
             * method is called, if the user advances focus, it should move to the first
             * focusable node following the new caret position.
             *
             * Calling this method should also scroll the application viewport in a way
             * that matches the behavior of the application's typical caret motion or tab
             * navigation as closely as possible. This also means that if the application's
             * caret motion or focus navigation does not trigger a scroll operation, this
             * method should not trigger one either. If the application does not have a caret
             * motion or focus navigation operation, this method should try to scroll the new
             * caret position into view while minimizing unnecessary scroll motion.
             *
             * @param offset the character offset of the new caret position
             */
            vfunc_set_caret_offset(offset: number): boolean;
            /**
             * Changes the start and end offset of the specified selection.
             *
             * @param selection_num The selection number.  The selected regions are
             * assigned numbers that correspond to how far the region is from the
             * start of the text.  The selected region closest to the beginning
             * of the text region is assigned the number 0, etc.  Note that adding,
             * moving or deleting a selected region can change the numbering.
             * @param start_offset the new starting character offset of the selection
             * @param end_offset the new end position of (e.g. offset immediately past)
             * the selection
             */
            vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
            vfunc_text_attributes_changed(): void;
            vfunc_text_caret_moved(location: number): void;
            /**
             * the signal handler which is executed when there is a
             *   text change. This virtual function is deprecated sice 2.9.4 and
             *   it should not be overriden.
             *
             * @param position
             * @param length
             */
            vfunc_text_changed(position: number, length: number): void;
            vfunc_text_selection_changed(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface TextNamespace {
        $gtype: GObject.GType<Text>;
        prototype: Text;
        /**
         * Frees the memory associated with an array of AtkTextRange. It is assumed
         * that the array was returned by the function atk_text_get_bounded_ranges
         * and is NULL terminated.
         *
         * @param ranges A pointer to an array of #AtkTextRange which is
         *   to be freed.
         */
        free_ranges(ranges: TextRange[]): void;
    }
    interface Text extends GObject.Object, Text.Interface {
        // Methods
        /**
         * Adds a selection bounded by the specified offsets.
         *
         * @returns %TRUE if successful, %FALSE otherwise
         * @param start_offset the starting character offset of the selected region
         * @param end_offset the offset of the first character after the selected region.
         */
        add_selection(start_offset: number, end_offset: number): boolean;
        /**
         * Get the ranges of text in the specified bounding box.
         *
         * @returns Array of AtkTextRange. The last
         *          element of the array returned by this function will be NULL.
         * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         * @param x_clip_type Specify the horizontal clip type.
         * @param y_clip_type Specify the vertical clip type.
         */
        get_bounded_ranges(
            rect: TextRectangle,
            coord_type: CoordType | null,
            x_clip_type: TextClipType | null,
            y_clip_type: TextClipType | null,
        ): TextRange[];
        /**
         * Gets the offset of the position of the caret (cursor).
         *
         * @returns the character offset of the position of the caret or -1 if
         *          the caret is not located inside the element or in the case of
         *          any other failure.
         */
        get_caret_offset(): number;
        /**
         * Gets the specified text.
         *
         * @returns the character at `offset` or 0 in the case of failure.
         * @param offset a character offset within `text`
         */
        get_character_at_offset(offset: number): string;
        /**
         * Gets the character count.
         *
         * @returns the number of characters or -1 in case of failure.
         */
        get_character_count(): number;
        /**
         * If the extent can not be obtained (e.g. missing support), all of x, y, width,
         * height are set to -1.
         *
         * Get the bounding box containing the glyph representing the character at
         *     a particular text offset.
         *
         * @param offset The offset of the text character for which bounding information is required.
         * @param coords specify whether coordinates are relative to the screen or widget window
         */
        get_character_extents(offset: number, coords: CoordType | null): [number, number, number, number];
        /**
         * Creates an #AtkAttributeSet which consists of the default values of
         * attributes for the text. See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         *
         * @returns an #AtkAttributeSet which contains the default text
         *          attributes for this #AtkText. This #AtkAttributeSet should be freed by
         *          a call to atk_attribute_set_free().
         */
        get_default_attributes(): AttributeSet;
        /**
         * Gets the number of selected regions.
         *
         * @returns The number of selected regions, or -1 in the case of failure.
         */
        get_n_selections(): number;
        /**
         * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
         * are interpreted as being relative to the screen or this widget's window
         * depending on `coords`.
         *
         * @returns the offset to the character which is located at  the specified
         *          `x` and `y` coordinates of -1 in case of failure.
         * @param x screen x-position of character
         * @param y screen y-position of character
         * @param coords specify whether coordinates are relative to the screen or
         * widget window
         */
        get_offset_at_point(x: number, y: number, coords: CoordType | null): number;
        /**
         * Get the bounding box for text within the specified range.
         *
         * If the extents can not be obtained (e.g. or missing support), the rectangle
         * fields are set to -1.
         *
         * @param start_offset The offset of the first text character for which boundary
         *        information is required.
         * @param end_offset The offset of the text character after the last character
         *        for which boundary information is required.
         * @param coord_type Specify whether coordinates are relative to the screen or widget window.
         */
        get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType | null): [TextRectangle];
        /**
         * Creates an #AtkAttributeSet which consists of the attributes explicitly
         * set at the position `offset` in the text. `start_offset` and `end_offset` are
         * set to the start and end of the range around `offset` where the attributes are
         * invariant. Note that `end_offset` is the offset of the first character
         * after the range.  See the enum AtkTextAttribute for types of text
         * attributes that can be returned. Note that other attributes may also be
         * returned.
         *
         * @returns an #AtkAttributeSet which contains the attributes
         *         explicitly set at `offset`. This #AtkAttributeSet should be freed by
         *         a call to atk_attribute_set_free().
         * @param offset the character offset at which to get the attributes, -1 means the offset of
         * the character to be inserted at the caret location.
         */
        get_run_attributes(offset: number): [AttributeSet, number, number];
        /**
         * Gets the text from the specified selection.
         *
         * @returns a newly allocated string containing the selected text. Use g_free()
         *          to free the returned string.
         * @param selection_num The selection number.  The selected regions are
         * assigned numbers that correspond to how far the region is from the
         * start of the text.  The selected region closest to the beginning
         * of the text region is assigned the number 0, etc.  Note that adding,
         * moving or deleting a selected region can change the numbering.
         */
        get_selection(selection_num: number): [string, number, number];
        /**
         * Gets a portion of the text exposed through an #AtkText according to a given `offset`
         * and a specific `granularity,` along with the start and end offsets defining the
         * boundaries of such a portion of text.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
         * offset is returned.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
         * is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
         * is from the line start at or before the offset to the line
         * start after the offset.
         *
         * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
         * is from the start of the paragraph at or before the offset to the start
         * of the following paragraph after the offset.
         *
         * @returns a newly allocated string containing the text at
         *          the `offset` bounded by the specified `granularity`. Use g_free()
         *          to free the returned string.  Returns %NULL if the offset is invalid
         *          or no implementation is available.
         * @param offset position
         * @param granularity An #AtkTextGranularity
         */
        get_string_at_offset(offset: number, granularity: TextGranularity | null): [string | null, number, number];
        /**
         * Gets the specified text.
         *
         * @returns a newly allocated string containing the text from `start_offset` up
         *          to, but not including `end_offset`. Use g_free() to free the returned
         *          string.
         * @param start_offset a starting character offset within `text`
         * @param end_offset an ending character offset within `text,` or -1 for the end of the string.
         */
        get_text(start_offset: number, end_offset: number): string;
        /**
         * Gets the specified text.
         *
         * @returns a newly allocated string containing the text after `offset` bounded
         *          by the specified `boundary_type`. Use g_free() to free the returned
         *          string.
         * @param offset position
         * @param boundary_type An #AtkTextBoundary
         */
        get_text_after_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Gets the specified text.
         *
         * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
         * offset is returned.
         *
         * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
         * is from the word start at or before the offset to the word start after
         * the offset.
         *
         * The returned string will contain the word at the offset if the offset
         * is inside a word and will contain the word before the offset if the
         * offset is not inside a word.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
         * string is from the sentence start at or before the offset to the sentence
         * start after the offset.
         *
         * The returned string will contain the sentence at the offset if the offset
         * is inside a sentence and will contain the sentence before the offset
         * if the offset is not inside a sentence.
         *
         * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
         * string is from the line start at or before the offset to the line
         * start after the offset.
         *
         * @returns a newly allocated string containing the text at `offset` bounded
         *          by the specified `boundary_type`. Use g_free() to free the returned
         *          string.
         * @param offset position
         * @param boundary_type An #AtkTextBoundary
         */
        get_text_at_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Gets the specified text.
         *
         * @returns a newly allocated string containing the text before `offset` bounded
         *          by the specified `boundary_type`. Use g_free() to free the returned
         *          string.
         * @param offset position
         * @param boundary_type An #AtkTextBoundary
         */
        get_text_before_offset(offset: number, boundary_type: TextBoundary | null): [string, number, number];
        /**
         * Removes the specified selection.
         *
         * @returns %TRUE if successful, %FALSE otherwise
         * @param selection_num The selection number.  The selected regions are
         * assigned numbers that correspond to how far the region is from the
         * start of the text.  The selected region closest to the beginning
         * of the text region is assigned the number 0, etc.  Note that adding,
         * moving or deleting a selected region can change the numbering.
         */
        remove_selection(selection_num: number): boolean;
        /**
         * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
         *
         * @returns whether scrolling was successful.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text,` or -1 for the end of the text.
         * @param type specify where the object should be made visible.
         */
        scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType | null): boolean;
        /**
         * Move the top-left of a substring of `text` to a given position of the screen
         * by scrolling all necessary parents.
         *
         * @returns whether scrolling was successful.
         * @param start_offset start offset in the `text`
         * @param end_offset end offset in the `text,` or -1 for the end of the text.
         * @param coords specify whether coordinates are relative to the screen or to the
         * parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         */
        scroll_substring_to_point(
            start_offset: number,
            end_offset: number,
            coords: CoordType | null,
            x: number,
            y: number,
        ): boolean;
        /**
         * Sets the caret (cursor) position to the specified `offset`.
         *
         * In the case of rich-text content, this method should either grab focus
         * or move the sequential focus navigation starting point (if the application
         * supports this concept) as if the user had clicked on the new caret position.
         * Typically, this means that the target of this operation is the node containing
         * the new caret position or one of its ancestors. In other words, after this
         * method is called, if the user advances focus, it should move to the first
         * focusable node following the new caret position.
         *
         * Calling this method should also scroll the application viewport in a way
         * that matches the behavior of the application's typical caret motion or tab
         * navigation as closely as possible. This also means that if the application's
         * caret motion or focus navigation does not trigger a scroll operation, this
         * method should not trigger one either. If the application does not have a caret
         * motion or focus navigation operation, this method should try to scroll the new
         * caret position into view while minimizing unnecessary scroll motion.
         *
         * @returns %TRUE if successful, %FALSE otherwise.
         * @param offset the character offset of the new caret position
         */
        set_caret_offset(offset: number): boolean;
        /**
         * Changes the start and end offset of the specified selection.
         *
         * @returns %TRUE if successful, %FALSE otherwise
         * @param selection_num The selection number.  The selected regions are
         * assigned numbers that correspond to how far the region is from the
         * start of the text.  The selected region closest to the beginning
         * of the text region is assigned the number 0, etc.  Note that adding,
         * moving or deleting a selected region can change the numbering.
         * @param start_offset the new starting character offset of the selection
         * @param end_offset the new end position of (e.g. offset immediately past)
         * the selection
         */
        set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    }
    export const Text: TextNamespace & (new () => Text);
    namespace Value {
        /**
         * Interface for implementing Value.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Gets the value of this object.
             */
            vfunc_get_current_value(): [unknown];
            /**
             * Gets the minimum increment by which the value of this object may be
             * changed.  If zero, the minimum increment is undefined, which may
             * mean that it is limited only by the floating point precision of the
             * platform.
             */
            vfunc_get_increment(): number;
            /**
             * Gets the maximum value of this object.
             */
            vfunc_get_maximum_value(): [unknown];
            /**
             * Gets the minimum increment by which the value of this object may be changed.  If zero,
             * the minimum increment is undefined, which may mean that it is limited only by the
             * floating point precision of the platform.
             */
            vfunc_get_minimum_increment(): [unknown];
            /**
             * Gets the minimum value of this object.
             */
            vfunc_get_minimum_value(): [unknown];
            /**
             * Gets the range of this object.
             */
            vfunc_get_range(): Range | null;
            /**
             * Gets the list of subranges defined for this object. See #AtkValue
             * introduction for examples of subranges and when to expose them.
             */
            vfunc_get_sub_ranges(): Range[];
            /**
             * Gets the current value and the human readable text alternative of
             * `obj`. `text` is a newly created string, that must be freed by the
             * caller. Can be NULL if no descriptor is available.
             */
            vfunc_get_value_and_text(): [number, string];
            /**
             * Sets the value of this object.
             *
             * @param value a #GValue which is the desired new accessible value.
             */
            vfunc_set_current_value(value: GObject.Value | any): boolean;
            /**
             * Sets the value of this object.
             *
             * This method is intended to provide a way to change the value of the
             * object. In any case, it is possible that the value can't be
             * modified (ie: a read-only component). If the value changes due this
             * call, it is possible that the text could change, and will trigger
             * an #AtkValue::value-changed signal emission.
             *
             * Note for implementors: the deprecated atk_value_set_current_value()
             * method returned TRUE or FALSE depending if the value was assigned
             * or not. In the practice several implementors were not able to
             * decide it, and returned TRUE in any case. For that reason it is not
             * required anymore to return if the value was properly assigned or
             * not.
             *
             * @param new_value a double which is the desired new accessible value.
             */
            vfunc_set_value(new_value: number): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ValueNamespace {
        $gtype: GObject.GType<Value>;
        prototype: Value;
    }
    interface Value extends GObject.Object, Value.Interface {
        // Methods
        /**
         * Gets the value of this object.
         */
        get_current_value(): [unknown];
        /**
         * Gets the minimum increment by which the value of this object may be
         * changed.  If zero, the minimum increment is undefined, which may
         * mean that it is limited only by the floating point precision of the
         * platform.
         *
         * @returns the minimum increment by which the value of this
         * object may be changed. zero if undefined.
         */
        get_increment(): number;
        /**
         * Gets the maximum value of this object.
         */
        get_maximum_value(): [unknown];
        /**
         * Gets the minimum increment by which the value of this object may be changed.  If zero,
         * the minimum increment is undefined, which may mean that it is limited only by the
         * floating point precision of the platform.
         */
        get_minimum_increment(): [unknown];
        /**
         * Gets the minimum value of this object.
         */
        get_minimum_value(): [unknown];
        /**
         * Gets the range of this object.
         *
         * @returns a newly allocated #AtkRange
         * that represents the minimum, maximum and descriptor (if available)
         * of `obj`. NULL if that range is not defined.
         */
        get_range(): Range | null;
        /**
         * Gets the list of subranges defined for this object. See #AtkValue
         * introduction for examples of subranges and when to expose them.
         *
         * @returns an #GSList of
         * #AtkRange which each of the subranges defined for this object. Free
         * the returns list with g_slist_free().
         */
        get_sub_ranges(): Range[];
        /**
         * Gets the current value and the human readable text alternative of
         * `obj`. `text` is a newly created string, that must be freed by the
         * caller. Can be NULL if no descriptor is available.
         */
        get_value_and_text(): [number, string];
        /**
         * Sets the value of this object.
         *
         * @returns %TRUE if new value is successfully set, %FALSE otherwise.
         * @param value a #GValue which is the desired new accessible value.
         */
        set_current_value(value: GObject.Value | any): boolean;
        /**
         * Sets the value of this object.
         *
         * This method is intended to provide a way to change the value of the
         * object. In any case, it is possible that the value can't be
         * modified (ie: a read-only component). If the value changes due this
         * call, it is possible that the text could change, and will trigger
         * an #AtkValue::value-changed signal emission.
         *
         * Note for implementors: the deprecated atk_value_set_current_value()
         * method returned TRUE or FALSE depending if the value was assigned
         * or not. In the practice several implementors were not able to
         * decide it, and returned TRUE in any case. For that reason it is not
         * required anymore to return if the value was properly assigned or
         * not.
         *
         * @param new_value a double which is the desired new accessible value.
         */
        set_value(new_value: number): void;
    }
    export const Value: ValueNamespace & (new () => Value);
    namespace Window {
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    export interface WindowNamespace {
        $gtype: GObject.GType<Window>;
        prototype: Window;
    }
    interface Window extends Object {}
    export const Window: WindowNamespace & (new () => Window);
    export type AttributeSet = GLib.SList;
    export type State = number;
    /**
     * Name of the imported GIR library
     *
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     *
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}
export default Atk;
