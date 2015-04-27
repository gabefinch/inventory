require 'rails_helper'

describe Location do
  it { should have_many :ingredients }
  it { should belong_to :parent }
  it { should have_many :children }
  it { should validate_presence_of :name }
  describe('.top_level') do
    it('returns array of all parentless categories') do
      fridge = Location.create(name: 'Fridge')
      freezer = Location.create(name: 'Freezer')
      freezer_top = Location.create(name: 'Top', parent_id: freezer.id)
      expect(Location.top_level).to eq([fridge, freezer])
    end
  end
  describe('#descendents') do
    it('returns descendents of a category') do
      freezer = Location.create(name: 'Freezer')
      freezer_top = Location.create(name: 'Top', parent_id: freezer.id)
      freezer_bottom = Location.create(name: 'Bottom', parent_id: freezer.id)
      expect(freezer.descendents).to eq([freezer_top, freezer_bottom])
    end
    it('returns empty array for childless') do
      freezer = Location.create(name: 'Freezer')
      expect(freezer.descendents).to eq([])
    end
  end
  describe('#self_and_descendents') do
    it('returns self and descendents of a category') do
      freezer = Location.create(name: 'Freezer')
      freezer_top = Location.create(name: 'Top', parent_id: freezer.id)
      freezer_bottom = Location.create(name: 'Bottom', parent_id: freezer.id)
      expect(freezer.self_and_descendents).to eq([freezer, freezer_top, freezer_bottom])
    end
    it('returns array of self only for a childless category') do
      freezer = Location.create(name: 'Freezer')
      expect(freezer.descendents).to eq([])
    end
  end
  describe('#children') do
    it('returns children of a category') do
      freezer = Location.create(name: 'Freezer')
      freezer_top = Location.create(name: 'Top', parent_id: freezer.id)
      expect(freezer.children).to eq([freezer_top])
    end
    it('returns empty array for childless') do
      freezer = Location.create(name: 'Freezer')
      expect(freezer.children).to eq([])
    end
  end
  describe('#children?') do
    it('returns true for category w/ children') do
      freezer = Location.create(name: 'Freezer')
      freezer_top = Location.create(name: 'Top', parent_id: freezer.id)
      expect(freezer.children?).to eq(true)
    end
    it('returns false for childless category') do
      freezer = Location.create(name: 'Freezer')
      expect(freezer.children?).to eq(false)
    end
  end
  describe('#parent') do
    it('returns parent for category w/ parent') do
      freezer = Location.create(name: 'Freezer')
      freezer_top = Location.create(name: 'Top', parent_id: freezer.id)
      expect(freezer_top.parent).to eq(freezer)
    end
    it('returns nil for parentless category') do
      freezer = Location.create(name: 'Freezer')
      expect(freezer.parent).to eq(nil)
    end
  end
  describe('#parent?') do
    it('returns true for category w/ parent') do
      freezer = Location.create(name: 'Freezer')
      freezer_top = Location.create(name: 'Top', parent_id: freezer.id)
      expect(freezer_top.parent?).to eq(true)
    end
    it('returns false for parentless category') do
      freezer = Location.create(name: 'Freezer')
      expect(freezer.parent?).to eq(false)
    end
  end
end
